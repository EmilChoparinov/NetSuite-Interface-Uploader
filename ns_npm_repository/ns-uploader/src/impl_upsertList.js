// var _ = require('underscore')
// ,	suitetalk = require('suitetalk')
// ,	Q = require('q')
// ,	Tool = require('./tool')
// ,	async = require('async')
// ; 


// _(Tool.prototype).extend({

// 	// @method _addChildren @param {Array<FileNode>} @param targetFolderId children 
// 	// @return {Deferred} resolved with the records array w responses
// 	_addChildren_noManifest: function (children, targetFolderId)
// 	{
// 		var self = this
// 		,	records = []
// 		,	deferred =  Q.defer()

// 		_(children).each(function (c)
// 		{
// 			var record = {
// 				recordType: c.type
// 			,	externalId: c.name
// 			,	fields: [
// 					{name: 'name', value: c.name}
// 				]
// 			}
// 			if (c.type==='file')
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
// 		.upsertList({records: records})
// 		.then(function (responseBody)
// 		{
// 			var responses = responseBody.upsertListResponse[0].writeResponseList[0].writeResponse; 

// 			// check responseBody.fault - example > 100mb
// 			if (responseBody.upsertListResponse[0].writeResponseList[0].status[0].$.isSuccess !== 'true')
// 			{
// 				deferred.reject(responseBody.upsertListResponse[0].writeResponseList[0].status[0].statusDetail[0].message + 
// 					' - Code: ' + responseBody.upsertListResponse[0].writeResponseList[0].status[0].statusDetail[0].code[0]);
// 				return deferred.promise;
// 			}


// 			var i = -1
// 			async.eachSeries(records, function(r, next)
// 			{
// 				i++; 

// 				var child = children[i]

// 				r.response = responses[i];

// 				if (r.response.status[0].$.isSuccess !== 'true')
// 				{
// 					if (child.type === 'file')
// 					{					
// 						console.log('ERROR writing file ' + child.path + ': ' + r.response.status[0].statusDetail[0].message + 
// 							'\nCode: ' + r.response.status[0].statusDetail[0].code[0] + '\nExiting. '); 
// 						process.exit(1); 	
// 					}
// 					else
// 					{
// 						// We cannot upsert folders - it will fail with error "A folder with the same name already exists in the selected folder."
// 						// so we need to locate the folder record to reference in its children when we recurse

// 						self.getFileNamed(targetFolderId, child.name, false, true)
// 						.then(function (record)
// 						{
// 							r.response = {baseRef:[record]};

// 							var newFolderInternalId2 = 	record.$.internalId
// 							self._addChildren_noManifest(child.children, newFolderInternalId2)
// 							.then(function(){next()})
// 							.catch(function(err){console.log('__recursing22222 add_child 22222 error ', err); next()})
// 						})
// 						.catch(function (err)
// 						{
// 							console.log('\n\nupsertList - getFileNamed error: ', err, err.stack)
// 							next()
// 						})
// 					}
// 				}

// 				else if (child.type === 'folder')
// 				{
// 					var newFolderInternalId = 	r.response.baseRef[0].$.internalId
// 					self._addChildren_noManifest(child.children, newFolderInternalId)
// 					.then(function(){next()})
// 					.catch(function(err){console.log('__recursing add_child error ', err); next()})
// 				}
// 				else
// 				{
// 					next()
// 				}

// 			}, function done(){deferred.resolve()})

// 		})
// 		.catch(function ()
// 		{
// 			console.log('ERROR1', arguments)
// 			deferred.reject.apply(deferred, arguments);
// 		}); 

// 		return deferred.promise;
// 	}

// }); 

// module.exports = Tool;

