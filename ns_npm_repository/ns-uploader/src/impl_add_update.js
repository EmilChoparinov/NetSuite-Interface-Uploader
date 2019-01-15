// var _ = require('underscore')
// ,	suitetalk = require('suitetalk')
// ,	Q = require('q')
// ,	Tool = require('./tool')
// ,	async = require('async')
// ,	fs = require('fs')
// ; 

// module.exports = Tool;

// _(Tool.prototype).extend({

// 	// @method _addChildren 
// 	// in this implementation we use add for each children. It supports content diffs and it will reuse existing 
// 	// file cabinet objects. For example if the file already exists we upsert its content.
// 	// @param {Array<FileNode>} @param targetFolderId children 
// 	// @return {Deferred} resolved with the records array w responses
// 	_addChildren: function(children, targetFolderId, localManifest, remoteManifest)
// 	{
// 		var self = this
// 		,	records = []
// 		,	deferred = Q.defer()

// 		// first we fill the children objects with information like suitetalk requests local file content hash
// 		_(children).each(function(c)
// 		{
// 			var record = {
// 				recordType: c.type
// 			,	fields: [
// 					{name: 'name', value: c.name}
// 				]
// 			}
// 			if(c.type==='file')
// 			{
// 				record.fields.push({name:'folder', nstype: 'RecordRef', type: c.type, internalId: targetFolderId});
// 				record.fields.push({name: 'fileType', value: self.getNetsuiteContentType(c.path)});
// 				record.fields.push({name: 'content', value:  self.file2base64(c.path)})
// 			}
// 			else
// 			{
// 				record.fields.push({name:'parent', nstype: 'RecordRef', type: c.type, internalId: targetFolderId});
// 			}
// 			records.push(record); 
// 			c.record = record;

// 			var localChildEntry = _.find(localManifest, function(localEntry){return localEntry.path === c.path})
			
// 			if(localChildEntry)
// 			{
// 				c.hash = localChildEntry.hash;

// 				var stats = fs.statSync(localChildEntry.path)
// 				,	fileSizeInMB = stats.size / 1000000.0
// 				if (fileSizeInMB > 10)
// 				{
// 					console.log('WARNING: File greater than 10 MB limit detected ! ', localChildEntry.path)
// 				}
// 			}
// 		});
 
//  		// then we iterate the children serially, for each of them we act accordingly to the manifests local and or remote:
//  		// if there is no remote or if the content changes then we add/upsert. 
//  		// first use time conditions must be take care like using an existing filecabinet folder even if it is not in the remote manifest.
// 		async.eachSeries(children, function iterator (child, callback) 
// 		{
// 			var remoteChild = _.find(remoteManifest, function(c){return c.path === child.path})			
// 			,	operation

// 			if (!remoteChild)
// 			{
// 				operation = 'add'
// 			}
// 			else
// 			{
// 				operation = 'upsert'
// 				child.record.externalId = remoteChild.internalId;				
// 			}

//  			var remoteChildHash = remoteChild ? remoteChild.hash : '';
//  			self.trackProgress();
// 			if (child.hash !== remoteChildHash && child.type !== 'folder')
// 			{				
// 				// console.log('FILE ACTION: ', child.path, operation, child.hash, remoteChildHash);
// 				suitetalk[operation](child.record)
// 				.then(function(response)
// 				{
// 					var writeResponse = response[operation+'Response'][0].writeResponse[0];

// 					if (writeResponse.status[0].$.isSuccess === 'false')
// 					{
// 						if (writeResponse.status[0].statusDetail[0].code[0] === 'USER_ERROR')
// 						{
// 							// file/folder already exists but there was no remote manifest so we upsert
// 							child.record.externalId = child.name
// 							suitetalk.upsert(child.record)
// 							.then(function (response)
// 							{
// 								child.response = response.upsertResponse[0].writeResponse[0].baseRef[0]

// 								console.log('child.response', child.path, child.response, 
// 									'\n\n'+JSON.stringify(response.upsertResponse[0].writeResponse[0],null,2))
// 								callback();
// 							})
// 							.catch(function (err)
// 							{
// 								console.log('error in inner upsert 2323', err);
// 								//TODO: what to do with this error?
// 								callback();
// 							})					
// 						}
// 						else
// 						{
// 							//errors like, ATTACH_SIZE_EXCEEDED
// 							deferred.reject(writeResponse.status[0].statusDetail[0].message[0] + ': ' + writeResponse.status[0].statusDetail[0].message[0]); 
// 						}
// 					}
// 					else
// 					{
// 						child.response = writeResponse.baseRef[0];
// 						callback();
// 					}
// 				})
// 				.catch (function(err)
// 				{
// 					console.log('ADD/UPSERT error: ', err, err.stack);
// 					//TODO. handle this error better
// 					callback();
// 				})
// 			}
// 			else if (child.type==='folder' && !remoteChild)
// 			{
// 				// a folder exists in the filecabinet but was not declared in the remote manifest - we can't upsert 
// 				// it as with files so we search for it to get its internal id 

// 				suitetalk.searchBasic({
// 					recordType: 'folder'
// 				,	filters: {
// 						parent: {
// 							type: 'SearchMultiSelectField'
// 						,	operator: 'anyOf'
// 						,	searchValue: [{
// 								type: 'RecordRef' 
// 							,	internalId: targetFolderId
// 							}]
// 						}
// 					,	name: {searchValue: child.name, operator: 'is'}
// 					}
// 				})
// 				.then(function(response)
// 				{
// 					if(parseInt(response.searchResponse[0].searchResult[0].totalRecords[0]) === 0)
// 					{
// 						//the folder don't exists in the filecabinet so we add it
// 						suitetalk.add({
// 							recordType: 'folder'
// 						,	fields: [
// 								{name: 'name', value: child.name}
// 							,	{name:'parent', nstype: 'RecordRef', type: 'folder', internalId: targetFolderId}
// 							]
// 						})
// 						.then(function(response)
// 						{
// 							child.response = response.addResponse[0].writeResponse[0].baseRef[0];
// 							callback();
// 						})
// 						.catch(function(err)
// 						{
// 							console.log('error in add folder dont exists', err, err.stack)
// 							//TODO what to do with this error?
// 							callback();
// 						})
// 					}
// 					else
// 					{
// 						// the folder exists in the file cabinet so we use it
// 						var results = response.searchResponse[0].searchResult[0].recordList[0].record;
// 						child.response = results[0];
// 						//TODO: check if anything was found.
// 						callback();						
// 					}
// 				})
// 				.catch(function(err)
// 				{
// 					console.log('ERROR case folder w no remote child', err, err.stack)
// 					//TODO what to do with this error?
// 					callback();
// 				}); 
// 			}
// 			else
// 			{
// 				// console.log('NO ACTION for: ', child.path)
// 				if(remoteChild)
// 				{
// 					child.response = {$: {internalId: remoteChild.internalId}}
// 				}
// 				callback();
// 			}
// 		}
// 		, function()
// 		{
// 			// all children added so now we RECURSE on each child folder
// 			async.eachSeries(children, function iterator(child2, callback2) 
// 			{
// 				if(child2.type === 'folder')
// 				{
// 					var newFolderInternalId = child2.response.$.internalId
// 					self._addChildren(child2.children, newFolderInternalId, localManifest, remoteManifest)
// 					.then(function()
// 					{
// 						callback2();
// 					})
// 					.catch(function(err)
// 					{
// 						console.log('ERROR adding child folder', err); 
// 						deferred.reject(err);
// 					})
// 				}
// 				else
// 				{
// 					callback2();
// 				}
// 			}, function done()
// 			{
// 				deferred.resolve();
// 			});
// 		}); 
// 		return deferred.promise;
// 	}
// }); 

