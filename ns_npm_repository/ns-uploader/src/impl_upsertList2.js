var _ = require('underscore')
,	suitetalk = require('suitetalk')
,	Q = require('q')
,	Tool = require('./tool')
,	async = require('async')
// ,	fs = require('fs')
; 


_(Tool.prototype).extend({

	// @method _addChildren @param {Array<FileNode>} @param targetFolderId children 
	// @return {Deferred} resolved with the records array w responses
	_addChildren: function (children, targetFolderId, localManifest, remoteManifest)
	{
		var self = this
		,	records = []
		,	removeIndexes = [] //we cannot splice while iterating the array - so we store indexes and do the splice after iteration
		,	deferred =  Q.defer()
		
		if (!children || children.length === 0)
		{
			deferred.resolve(); 
			return deferred.promise;
		}
		// first we iterate all children and create the suitetalk operation request objects. Also see if file contents changed and 
		var i = 0;
		_(children).each(function (c)
		{
			var record = {
				recordType: c.type
			,	externalId: c.name + '_' + Math.random() // I have to pass a random value here - if not file collisions of files w same name in different folders occurs
			,	fields: [
					{name: 'name', value: c.name}
				]
			}
			if (c.type==='file')
			{
				record.fields.push({name:'folder', nstype: 'RecordRef', type: 'folder', internalId: targetFolderId});
				record.fields.push({name: 'fileType', value: self.getNetsuiteContentType(c.path)});
				record.fields.push({name: 'content', value:  self.file2base64(c.path)})
			}
			else
			{
				record.fields.push({name:'parent', nstype: 'RecordRef', type: 'folder', internalId: targetFolderId});
			}

			var localChildEntry = _.find(localManifest, function(localEntry){return localEntry.path === c.path})
			
			if (localChildEntry)
			{
				c.hash = localChildEntry.hash;
			}

			var remoteChild = _.find(remoteManifest, function(remoteEntry){return remoteEntry.path === c.path})	
			var remoteChildHash = remoteChild ? remoteChild.hash : '';
 			self.trackProgress();

			records.push(record)
			c.record = record;

			// console.log('comparing', c.hash, remoteChildHash, c.path, (c.hash === remoteChildHash && c.type !== 'folder') )
			if ( (c.hash === remoteChildHash && c.type !== 'folder') || self.ignoreFile(c.path))
			{
				removeIndexes.push(i)
			}

			i++;
		});
		
		// remove the non desired ones from children and records array:
		var indexDecrement=0
		_.each(removeIndexes, function(index)
		{
			children.splice(index-indexDecrement,1); 
			records.splice(index-indexDecrement,1);
			indexDecrement++;
		});
		
		if (records.length === 0)
		{
			deferred.resolve();
			return deferred.promise;
		}
		
		// console.log('\n  Writing in folder ' + targetFolderId + ': ', _.map(children, function(c){return c.path}).join('",  "')); 

		// now we add records of this folder level all together using upsertlist operation 
		suitetalk
		.upsertList({records: records})
		.then(function (responseBody)
		{
			var responses = responseBody.upsertListResponse[0].writeResponseList[0].writeResponse; 

			//TODO: we must support manifests without internalIds - in the case the records was updated we should get the internal ids of those records here and update the remoteManifest variable so the manifest is updated with the internalIds after upload finished in main

			// check responseBody.fault - example > 100mb
			if (responseBody.upsertListResponse[0].writeResponseList[0].status[0].$.isSuccess !== 'true')
			{
				deferred.reject(responseBody.upsertListResponse[0].writeResponseList[0].status[0].statusDetail[0].message + 
					' - Code: ' + responseBody.upsertListResponse[0].writeResponseList[0].status[0].statusDetail[0].code[0]);
				return deferred.promise;
			}

			var i = -1
			async.eachSeries(records, function(r, next)
			{
				i++; 

				var child = children[i]

				r.response = responses[i];

				if (r.response.status[0].$.isSuccess !== 'true')
				{
					if (child.type === 'file')
					{					
						console.log('ERROR writing file ' + child.path + ': ' + r.response.status[0].statusDetail[0].message + 
							'\nCode: ' + r.response.status[0].statusDetail[0].code[0] + '\nExiting. '); 
						process.exit(1); 	
					}
					else
					{
						self.getFileNamed(targetFolderId, child.name, false, true)
						.then(function (record)
						{
							r.response = {baseRef:[record]};

							var newFolderInternalId2 = 	record.$.internalId
							self._addChildren(child.children, newFolderInternalId2, localManifest, remoteManifest)
								.then(function(){next()})
								.catch(function(err){console.log('__recursing22222 add_child 22222 error ', err, err.stack); next()})
						})
						.catch(function (err)
						{
							console.log('\n\nupsertList - getFileNamed error: ', err, err.stack)
							next()
						})						
					}
				}

				else if (child.type === 'folder')
				{
					var newFolderInternalId = 	r.response.baseRef[0].$.internalId
					self._addChildren(child.children, newFolderInternalId, localManifest, remoteManifest)
						.then(function(){next()})
						.catch(function(err){console.log('__recursing add_child error ', err); next()});
				}
				else
				{
					next();
				}

			}, function done(){deferred.resolve()})

		})
		.catch(function ()
		{
			console.log('ERROR1', arguments); //TODO: handle this error better
			deferred.reject.apply(deferred, arguments);
		}); 

		return deferred.promise;
	}

}); 

module.exports = Tool;

