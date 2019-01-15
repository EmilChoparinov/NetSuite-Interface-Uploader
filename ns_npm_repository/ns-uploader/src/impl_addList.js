// var _ = require('underscore')
// ,	suitetalk = require('suitetalk')
// ,	fs = require('fs')
// ,	path = require('path')
// ,	Q = require('q')
// ,	Tool = require('./tool')
// ; 


// _(Tool.prototype).extend({

// 	// @method _addChildren @param {Array<FileNode>} @param targetFolderId children 
// 	// @return {Deferred} resolved with the records array w responses
// 	_addChildren: function(children, targetFolderId)
// 	{
// 		// console.log('addChildren', children.length, 'folderid: '+targetFolderId); 
// 		var self = this
// 		,	records = []
// 		,	deferred =  Q.defer()

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
// 			records.push(record)
// 			c.record = record;
// 		});

// 		suitetalk
// 		.addList({records: records})
// 		.then(function(responseBody)
// 		{
// 			var childPromises = []
// 			,	responses = responseBody.addListResponse[0].writeResponseList[0].writeResponse; 

// 			//check responseBody.fault - example > 100mb
// 			if(responseBody.addListResponse[0].writeResponseList[0].status[0].$.isSuccess !== 'true')
// 			{
// 				deferred.reject(responseBody.addListResponse[0].writeResponseList[0].status[0].statusDetail[0].message + 
// 					' - Code: ' + responseBody.addListResponse[0].writeResponseList[0].status[0].statusDetail[0].code[0]);
// 				return deferred.promise;
// 			}

// 			for(var i = 0; i < records.length; i++) 
// 			{
// 				//TODO: check response status isSuccess and equal array lengths, we assume all went fine and netsuite responses respect order.
// 				var r = records[i]
// 				,	child = children[i]

// 				r.response = responses[i];

// 				if(r.response.status[0].$.isSuccess !== 'true')
// 				{
// 					console.log('ERROR: '+r.response.status[0].statusDetail[0].message + 
// 						'\nCode: ' + r.response.status[0].statusDetail[0].code[0] + 
// 						'\nExiting. '); 
// 					process.exit(1); 
// 				}

// 				if (child.type === 'folder')
// 				{
// 					var newFolderInternalId = 	r.response.baseRef[0].$.internalId
// 					var childPromise = self._addChildren(child.children, newFolderInternalId)
// 					childPromises.push(childPromise)
// 				}
// 			}
// 			Q.all(childPromises).then(function()
// 			{
// 				deferred.resolve(arguments);
// 			})

// 		})
// 		.catch(function()
// 		{
// 			deferred.reject.apply(deferred, arguments);
// 			console.log('ERROR1', arguments)
// 		}); 

// 		return deferred.promise;
// 	}

// }); 

// module.exports = Tool;

