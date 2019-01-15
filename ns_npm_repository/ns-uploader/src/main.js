var _ = require('underscore')
,	fs = require('fs')
,	Q = require('q')
,	Tool = require('./tool')

; 

require('./delete')
require('./manifest-manager')

// @module suitetalk4node.uploader @class Uploader

_(Tool.prototype).extend({

	//@method main @param {MainConfig} config @return {Deferred}
	main: function (config)
	{
		var self = this
		,	deferred = Q.defer()
		,	remoteManifest = []
		,	localManifest = this.buildLocalManifest(config.sourceFolderPath)
		,	finalManifest; 

		//first we check if we need to remove the remote manifest if any because configuration 'clean' says so
		self.checkCleanManifest(config)

		//then, get the remote manifest
		.then(function()
		{		
			return self.getFileNamed(config.targetFolderId, self.MANIFEST_FILE_NAME, true);
		})
		
		//then build the local manifest
		.then(function(record)
		{
			if(record)
			{
				var content = new Buffer(record.content[0], 'base64').toString(); 
				remoteManifest = JSON.parse(content);
			}
			return self.buildLocalManifest(config.sourceFolderPath);
		})

		//now that we have both manifest, start uploading
		.then(function()
		{
			var deferred2 = Q.defer()
			self.addFileContentHashTo(localManifest, config.sourceFolderPath)
			.then(function(manifest)
			{
				localManifest = manifest;
				deferred2.resolve(
					self.addFolder(config.sourceFolderPath, config.targetFolderId, localManifest, remoteManifest)
				);
			})
			.catch(function(err)
			{
				console.log('ERROR in main while writting manifest: ', err, err.stack);
				//TODO: handle this error better
				deferred2.reject(err);
			});
			return deferred2.promise;
		})

		// upload is done, now we update the manifest
		.then(function(uploadResults)
		{
			var uploadedManifest = self.buildManifest(uploadResults); 
			finalManifest = self.mergeManifests(localManifest, remoteManifest, uploadedManifest);
			return self.addOrUpdateFile(config.targetFolderId, self.MANIFEST_FILE_NAME, 
				JSON.stringify(finalManifest), '_PLAINTEXT');
		})

		.then(function()
		{
			deferred.resolve(finalManifest);
		})

		.catch(function(err)
		{
			console.log('ERROR in main : ', err, err.stack);
			//TODO: handle this error better
			deferred.reject(err);
		});
		return deferred.promise;
	}



,	checkCleanManifest: function(config)
	{
		if(!config.cleanManifest)
		{
			var deferred = Q.defer();
			deferred.resolve();
			return deferred.promise;
		}
		else
		{
			return this.removeFileNamed(config.targetFolderId, this.MANIFEST_FILE_NAME, true)
		}
	}

}); 

module.exports = Tool;

/*
@class MainConfig
@property sourceFolderPath @mandatory
*/