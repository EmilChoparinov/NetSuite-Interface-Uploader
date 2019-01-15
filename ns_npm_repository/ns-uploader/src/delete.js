// // WIP - not working yet
// var _ = require('underscore')
// ,	suitetalk = require('suitetalk')
// ,	Tool = require('./tool')
// ; 

// // @module suitetalk4node.uploader @class Uploader

// _(Tool.prototype).extend({

// 	// @method delete will remove the target folder - it will do a recursive job since folder with children 
// 	// cannot be removed.  @param {String} folderId @return {Deferred}
// 	delete: function(folderId)
// 	{
// 		var self = this; 

// 		// var removeChildFilesPromises = []
// 		// , removeChildFoldersPromises = [];

// 		suitetalk.searchBasic({
// 			recordType: 'file'
// 		,	filters: {
// 				folder: {
// 					type: 'SearchMultiSelectField'
// 				,	operator: 'anyOf'
// 				,	searchValue: [{
// 						type: 'RecordRef' //TODO: change type to nstype as did for add fields
// 						, internalId: folderId
// 					}]
// 				}
// 			}
// 		})
// 		.then(function(response)
// 		{
// 			var results = response.searchResponse[0].searchResult[0].recordList[0].record
// 			,	fileRecords = [];
// 			_(results).each(function(result)
// 			{
// 				fileRecords.push({recordType: 'file', internalId: result.$.internalId})
// 				// removeChildFilesPromises.push(suitetalk.delete({recordType: 'file', internalId: result.$.internalId}));
// 			})
// 			suitetalk.deleteList({records: fileRecords})
// 			.then(function(){console.log('sucess deletelist')})
// 			.fail(function(error){console.log('fail deletelist', error, error.stack)})
// 			// console.log('remove searchBasic success', JSON.stringify(response))
// 		})
// 		.catch(function(error)
// 		{
// 			console.log('remove searchBasic error', error, error.stack)
// 		}); 
// 	}

// }); 


// module.exports = Tool;
