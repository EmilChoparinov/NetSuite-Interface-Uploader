var suitetalk = require('../src/index'); 
var _ = require('underscore'); 

var testUtil = require('./testUtil'); 
  
describe('addList', function()
{
	var aFolderName = 'folderfromws1_addlisttest_'+new Date().getTime()
	,	aFolderInternalId
	,	newFilesIds = [];

	it('add a new folder in parent internalId==1', function(cb)
	{
		var addFolderCommand1 = {
			recordType: 'folder'
		,	fields: [
				{name: 'name', value: aFolderName}
			,	{name:'parent', nstype: 'RecordRef', type: 'folder', internalId: '1'}
			]
		}; 
		suitetalk.add(addFolderCommand1, function(error, response)
		{
			expect(error).toBeFalsy(); 
			if(error)
			{
				console.log('ERROR: ', error); 
				expect('should be no errors').toBe(false);
			}
			else
			{
				// var results = [];
				expect(response.addResponse[0].writeResponse[0].status[0].$.isSuccess).toBe('true'); 
				aFolderInternalId = response.addResponse[0].writeResponse[0].baseRef[0].$.internalId;
				expect(parseInt(aFolderInternalId)>0).toBe(true); 
				testUtil.log('add folder: '+aFolderInternalId);
			}			
			cb();
		}); 
	}); 

	it('add multiple files', function(cb)
	{
		var addListCommand1 = {records: []}, count = 3; 

		for (var i = 0; i < 3; i++) 
		{
			addListCommand1.records.push({
				recordType: 'file'
				, fields: [
					{name: 'name', value: 'newFile'+i+'.txt'}
				,	{name: 'fileType', value: '_PLAINTEXT'}
				,	{name: 'content', value: new Buffer('Hello World from '+i+'th file').toString('base64')} //'aGVsbG8gd29ybGQ='
				,	{name: 'folder', nstype: 'RecordRef', internalId: aFolderInternalId}
				]
			});
		}

		suitetalk.addList(addListCommand1, function(error, response, soap)
		{
			expect(error).toBeFalsy(); 
			if(error)
			{
				console.log('ERROR: ', error); 
			}
			else
			{
				// console.log(JSON.stringify(response, null, 2))
				var responseList = response.addListResponse[0].writeResponseList[0];
				expect(responseList.status[0].$.isSuccess).toBe('true'); //global addList oepration status
				expect(responseList.writeResponse.length).toBe(count); 
				_(responseList.writeResponse).each(function(writeResponse)
				{
					expect(writeResponse.status[0].$.isSuccess).toBe('true'); 
					var internalId = writeResponse.baseRef[0].$.internalId; 
					expect(parseInt(internalId)>0).toBe(true); 
					newFilesIds.push(internalId);
				}); 

				// var writeResponse = response.addResponse[0].writeResponse[0]; 
				// expect(writeResponse.status[0].$.isSuccess).toBe('true');
				// aFileInternalId = writeResponse.baseRef[0].$.internalId; 
				// testUtil.log('add file: '+aFileInternalId); 
				// expect(parseInt(aFileInternalId)>0).toBe(true);				
			}
			cb();
		}); 
	}); 
	
	//TODO: get one of these files

	//TODO. add moltiple folders. 
}); 




