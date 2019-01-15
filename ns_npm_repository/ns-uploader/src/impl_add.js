// var _ = require('underscore')
// ,	suitetalk = require('suitetalk')
// // ,	shell = require('shelljs')
// // ,	fs = require('fs')
// // ,	path = require('path')
// ,	Q = require('q')
// ,	Tool = require('./tool')
// ,	async = require('async')
// ; 


// _(Tool.prototype).extend({

// 	// @method _addChildren 
// 	// in this implementation we use add for each children. Might me slower than the addlist
// 	// implementation but it will be safer and give optimal file size / governance limitations
// 	// @param {Array<FileNode>} @param targetFolderId children 
// 	// @return {Deferred} resolved with the records array w responses
// 	_addChildren: function(children, targetFolderId)
// 	{
// 		var self = this
// 		,	records = []
// 		,	deferred = Q.defer()

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
// 		});

// 		async.eachSeries(children, function iterator(child, callback) 
// 		{
// 			suitetalk
// 			.add(child.record)
// 			.then(function(responseBody)
// 			{
// 				//TODO: check for error
// 				var response = responseBody.addResponse[0].writeResponse[0].baseRef[0]; 
// 				child.response = response;
// 				callback();
// 			})
// 			.catch(function(e)
// 			{
// 				console.log('ADD error: ', e, e.stack);
// 				throw e;
// 			})
// 		}, function done()
// 		{
// 			// all children added so now we iterate the folders and recurse for each of them
// 			async.eachSeries(children, function iterator(child2, callback) 
// 			{
// 				if(child2.type === 'folder')
// 				{
// 					var newFolderInternalId = child2.response.$.internalId
// 					self._addChildren(child2.children, newFolderInternalId)
// 					.then(function()
// 					{
// 						callback();
// 					})
// 					.catch(function(err)
// 					{
// 						console.log('ERROR adding child folder', err); 
// 						deferred.reject(err);
// 					})
// 				}
// 				else
// 				{
// 					callback();
// 				}
// 			}, function done()
// 			{
// 				// console.log('all job done at this level folder', targetFolderId); 
// 				deferred.resolve();
// 			});
// 		});

// 		return deferred.promise;
// 	}
// }); 

// module.exports = Tool;

