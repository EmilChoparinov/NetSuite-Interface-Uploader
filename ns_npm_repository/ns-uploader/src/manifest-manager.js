var _ = require('underscore')
,	Tool = require('./tool')
,	suitetalk = require('suitetalk')
,	Q = require('q')
,	crypto = require('crypto')
,	fs = require('fs')
,	async = require('async')
,	path = require('path')

module.exports = Tool; 

_.extend(Tool.prototype, {


	MANIFEST_FILE_NAME: '__ns-uploader-manifest__.json'

,	ignoreFile: function(f)
	{
		if (path.parse(f).base === this.MANIFEST_FILE_NAME)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

,	mergeManifests: function(localManifest, remoteManifest, uploadedManifest)
	{
		var finalManifest = [], self = this;

		//first we add the filecabinet information to the local manifest entries
		_.each(localManifest, function(localEntry)
		{
			var remoteEntry = _.find(remoteManifest, function(remote){return remote.path === localEntry.path; });
			if(!remoteEntry) //means that a new file was added in this upload
			{
				var uploadedEntry = _.find(uploadedManifest, function(uploaded){return uploaded.path === localEntry.path; });
				if(!uploadedEntry && !self.ignoreFile(localEntry.path))
				{
					console.log('ERROR mergeManifests ', localEntry.path, ' local entry not found in uploaded!')
				}
				else if(uploadedEntry)
				{
					localEntry.internalId = uploadedEntry.internalId;
					// localEntry.parentFolderId = uploadedEntry.parentFolderId;
				}
			}
			else
			{				
				localEntry.internalId = remoteEntry.internalId;
				// localEntry.parentFolderId = remoteEntry.parentFolderId;
			}
			finalManifest.push(localEntry); 
		})

		//last we add those files that might be in the file cabinet but not locally
		_.each(remoteManifest, function(remoteEntry)
		{
			var localEntry = _.find(localManifest, function(local){return local.path === remoteEntry.path; });
			if(!localEntry)
			{
				finalManifest.push(remoteEntry)
			}
		})

		return finalManifest;
	}

,	buildManifest: function(data)
	{
		var output = [];
		this.visitManifestFiles(data.folder.children, output); 
		return output;
	}

,	addFileContentHashTo: function(manifest)
	{
		var self = this
		,	deferred = Q.defer()
		async.eachSeries(manifest, function(entry, next)
		{
			if(entry.type === 'file')
			{
				self.getFileContentHash(entry.path).then(function(hash)
				{
					entry.hash = hash; 
					next();
				})					
			}
			else
			{				
				next(); 
			}
		}, function()
		{
			//TODO. error?
			deferred.resolve(manifest)
		})
		return deferred.promise;
	}

,	getFileContentHash: function(file)
	{
		var deferred = Q.defer()
		,	shasum = crypto.createHash( 'md5')
		,	s = fs.ReadStream(file);
		s.on('data', function(d) 
		{ 
			shasum.update(d); 
		});
		s.on('end', function() 
		{
			try 
			{
				var d = shasum.digest('hex');
				deferred.resolve(d);
			}
			catch(err){
				//TODO: it happens
			}
		});
		return deferred.promise;
	}

,	visitManifestFiles: function(children, output)
	{
		var self = this;
		_.each(children, function(node)
		{
			// if(!node.record)
			// {
			// 	debugger;
			// }
			var parentFolder = _.find(node.record.fields, function(f){return f.name==='folder';})
			if(!parentFolder)
			{
				parentFolder = _.find(node.record.fields, function(f){return f.name==='parent';})
			}
			if(!node.response)
			{
				node.response = node.record.response.baseRef[0] //To support the other add implementation using upsertList that has another api :(
			}
			var data = {
				path: self.toUnix(node.path)
			,	type: node.record.recordType
			,	internalId: node.response.$.internalId
			,	parentFolderId: parentFolder.internalId
			}
			output.push(data);
			self.visitManifestFiles(node.children, output); 
		}); 		
	}


,	buildLocalManifest: function(rootFolder)
	{ 
		var manifest = [];
		this.allLocalFilesCount = 0;
		return this._buildLocalManifest(rootFolder, manifest)
	}

,	_buildLocalManifest: function(folder, manifest)
	{
		var deferred = Q.defer()
		,	self = this
		,	children = fs.readdirSync(folder)
		async.eachSeries(children, function(c, done)
		{
			var childPath = path.join(folder, c);
			self.allLocalFilesCount++;
			if(fs.lstatSync(childPath).isDirectory())
			{
				manifest.push({
					path: self.toUnix(childPath)
				,	type: 'folder'
				}); 
				self._buildLocalManifest(childPath, manifest).then(function(){done()})
			}
			else
			{
				self.getFileContentHash(childPath).then(function(hash)
				{
					manifest.push({
						path: self.toUnix(childPath)
					,	hash: hash
					,	type: 'file'
					}); 
					done();
				})
			}
		}, function()
		{
			deferred.resolve(manifest); 
		})
		return deferred.promise;		
	}
});