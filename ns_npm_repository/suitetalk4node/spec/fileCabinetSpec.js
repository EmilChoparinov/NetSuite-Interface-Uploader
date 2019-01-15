var suitetalk = require('../src/index'); 
var _ = require('underscore'); 

var testUtil = require('./testUtil'); 
  
describe('file cabinet', function()
{
	var aFolderName = 'folderfromws1_'+new Date().getTime()
	,	aFolderInternalId
	,	aFileInternalId
	,	rootFolderSearchTotalRecords;


	it('folder search basic initially', function(cb)
	{
		suitetalk.searchBasic({
			recordType: 'folder'
		,	filters: {
				parent: {
					type: 'SearchMultiSelectField'
				,	operator: 'anyOf'
				,	searchValue: [{
						type: 'RecordRef' //TODO: change type to nstype as did for add fields
						, internalId: 1
					}]
				}
			}
		})
		.then(function(response)
		{
			rootFolderSearchTotalRecords = response.searchResponse[0].searchResult[0].totalRecords[0];
			// expect(response.searchResponse[0].searchResult[0].totalRecords[0]).toBe('0');
			testUtil.log('search folder, count: '+rootFolderSearchTotalRecords); 
			cb();
		})
		.catch(function(error)
		{
			console.log(error.stack); 
			expect(error).toBeFalsy(); 
			cb();
		}); 
	}); 

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

	it('folder search basic should give one more', function(cb)
	{
		suitetalk.searchBasic({
			recordType: 'folder'
		,	filters: {
				parent: {
					type: 'SearchMultiSelectField'
				,	operator: 'anyOf'
				,	searchValue: [{
						type: 'RecordRef' //TODO: change type to nstype as did for add fields
						, internalId: 1
					}]
				}
			}
		})
		.then(function(response)
		{
			var now = response.searchResponse[0].searchResult[0].totalRecords[0];
			expect(parseInt(now) === parseInt(rootFolderSearchTotalRecords)+1).toBe(true);
			testUtil.log('search folder, count: '+now); 
			cb();
		})
		.catch(function(error)
		{
			console.log(error.stack); 
			expect(error).toBeFalsy(); 
			cb();
		}); 
	}); 

	it('adding the same folder again should throw user error', function(cb)
	{
		var addFolderCommand1 = {
			recordType: 'folder'
		,	fields: [
				{name: 'name', value: aFolderName}
			,	{name:'parent', nstype: 'RecordRef', type: 'folder', internalId: '1'}
			]
		}; 
		suitetalk.add(addFolderCommand1)
		.then(function(response)
		{
			expect(response.addResponse[0].writeResponse[0].status[0].$.isSuccess).toBe('false'); 
			expect(response.addResponse[0].writeResponse[0].status[0].statusDetail[0].code[0]).toBe('USER_ERROR'); 
			cb();
		})
		.catch(function(error)
		{
			console.log(error.stack); 
			expect(error).toBeFalsy(); 
			cb();
		});; 
	}); 


	it('file search basic should return 0 results', function(cb)
	{
		suitetalk.searchBasic({
			recordType: 'file'
		,	filters: {
				folder: {
					type: 'SearchMultiSelectField'
				,	operator: 'anyOf'
				,	searchValue: [{
						type: 'RecordRef' //TODO: change type to nstype as did for add fields
						, internalId: aFolderInternalId
					}]
				}
			}
		})
		.then(function(response)
		{
			expect(response.searchResponse[0].searchResult[0].totalRecords[0]).toBe('0');
			testUtil.log('search folder, count: '+0); 
			cb();
		})
		.catch(function(error)
		{
			console.log(error.stack); 
			expect(error).toBeFalsy(); 
			cb();
		}); 
	}); 




	it('add text file', function(cb)
	{
		suitetalk.add({
			recordType: 'file'
		,	fields: [
				{name: 'name', value: 'newFile1.txt'}
			,	{name: 'fileType', value: '_PLAINTEXT'}
			,	{name: 'content', value: new Buffer("Hello World").toString('base64')} //'aGVsbG8gd29ybGQ='
			,	{name: 'folder', nstype: 'RecordRef', internalId: aFolderInternalId}
			]
		}, function(error, response, soap)
		{
			expect(error).toBeFalsy(); 
			if(error)
			{
				console.log('ERROR: ', error); 
			}
			else
			{
				var writeResponse = response.addResponse[0].writeResponse[0]; 
				expect(writeResponse.status[0].$.isSuccess).toBe('true');
				aFileInternalId = writeResponse.baseRef[0].$.internalId; 
				testUtil.log('add file: '+aFileInternalId); 
				expect(parseInt(aFileInternalId)>0).toBe(true);				
			}
			cb();
		}); 
	}); 
	
	// var newFileInternalId 
	it('get file', function(cb)
	{
		var getCommand1 = {
			recordType: 'file'
		,	internalId: aFileInternalId
		}
		suitetalk.get(getCommand1, function(error, response, soap)
		{
			expect(error).toBeFalsy(); 
			if(error)
			{
				console.log('ERROR: ', error); 
			}
			else
			{
				var readResponse = response.getResponse[0].readResponse[0]; 	
				expect(readResponse.record[0].content[0].trim()).toBe(new Buffer("Hello World").toString('base64'))
				// debugger;			
				expect(readResponse.status[0].$.isSuccess).toBe('true');
				expect(readResponse.record[0].$.internalId).toBe(aFileInternalId);
				// newFileInternalId = readResponse.record[0].$.internalId;
				testUtil.log('get file: ' + readResponse.record[0].$.internalId); 		
			}
			cb();
		}); 
	}); 

	it('upsert file using internal id', function(cb)
	{
		suitetalk.upsert({
			recordType: 'file'
		,	externalId: aFileInternalId
		,	fields: [
				{name: 'name', value: 'newFile1.txt'}
			,	{name: 'fileType', value: '_PLAINTEXT'}
			,	{name: 'content', value: new Buffer("Hello World Upsert!!!").toString('base64')} //'aGVsbG8gd29ybGQ='
			,	{name: 'folder', nstype: 'RecordRef', internalId: aFolderInternalId}
			]
		}, function(error, response, soap)
		{
			expect(error).toBeFalsy(); 
			if(error)
			{
				console.log('ERROR: ', error, error.stack); 
			}
			else
			{
				// console.log(JSON.stringify(response))
				var writeResponse = response.upsertResponse[0].writeResponse[0]; 
				expect(writeResponse.status[0].$.isSuccess).toBe('true');
				aFileInternalId = writeResponse.baseRef[0].$.internalId; 
				testUtil.log('upsert file: '+aFileInternalId); 
				expect(parseInt(aFileInternalId)>0).toBe(true);				
			}
			cb();
		}); 
	});

	it('get file', function(cb)
	{
		var getCommand1 = {
			recordType: 'file'
		,	internalId: aFileInternalId
		}
		suitetalk.get(getCommand1, function(error, response, soap)
		{
			expect(error).toBeFalsy(); 
			if(error)
			{
				console.log('ERROR: ', error); 
			}
			else
			{
				var readResponse = response.getResponse[0].readResponse[0]; 	
				expect(readResponse.record[0].content[0].trim()).toBe(new Buffer("Hello World Upsert!!!").toString('base64'))
				// debugger;			
				expect(readResponse.status[0].$.isSuccess).toBe('true');
				expect(readResponse.record[0].$.internalId).toBe(aFileInternalId);
				newFileInternalId = readResponse.record[0].$.internalId;
				testUtil.log('get file: ' + readResponse.record[0].$.internalId); 		
			}
			cb();
		}); 
	}); 

	it('upsert file using name as externalid id', function(cb)
	{
		suitetalk.upsert({
			recordType: 'file'
		,	externalId: 'newFile1.txt'
		,	fields: [
				{name: 'name', value: 'newFile1.txt'}
			,	{name: 'fileType', value: '_PLAINTEXT'}
			,	{name: 'content', value: new Buffer("Hello World Upsert using name as external id!!!").toString('base64')} //'aGVsbG8gd29ybGQ='
			,	{name: 'folder', nstype: 'RecordRef', internalId: aFolderInternalId}
			]
		}, function(error, response, soap)
		{
			expect(error).toBeFalsy(); 
			if(error)
			{
				console.log('ERROR: ', error, error.stack); 
			}
			else
			{
				// console.log(JSON.stringify(response))
				var writeResponse = response.upsertResponse[0].writeResponse[0]; 
				expect(writeResponse.status[0].$.isSuccess).toBe('true');
				aFileInternalId = writeResponse.baseRef[0].$.internalId; 
				testUtil.log('upsert file: '+aFileInternalId); 
				expect(parseInt(aFileInternalId)>0).toBe(true);				
			}
			cb();
		}); 
	});

	it('get file', function(cb)
	{
		var getCommand1 = {
			recordType: 'file'
		,	internalId: aFileInternalId
		}
		suitetalk.get(getCommand1, function(error, response, soap)
		{
			expect(error).toBeFalsy(); 
			if(error)
			{
				console.log('ERROR: ', error); 
			}
			else
			{
				var readResponse = response.getResponse[0].readResponse[0]; 	
				expect(readResponse.record[0].content[0].trim()).toBe(new Buffer("Hello World Upsert using name as external id!!!").toString('base64'))
				// debugger;			
				expect(readResponse.status[0].$.isSuccess).toBe('true');
				expect(readResponse.record[0].$.internalId).toBe(aFileInternalId);
				newFileInternalId = readResponse.record[0].$.internalId;
				testUtil.log('get file: ' + readResponse.record[0].$.internalId); 		
			}
			cb();
		}); 
	}); 


	it('folder search basic should return 1 results', function(cb)
	{
		suitetalk.searchBasic({
			recordType: 'file'
		,	filters: {
				folder: {
					type: 'SearchMultiSelectField'
				,	operator: 'anyOf'
				,	searchValue: [{
						type: 'RecordRef' //TODO: change type to nstype as did for add fields
						, internalId: aFolderInternalId
					}]
				}
			}
		}, function(error, response)
		{
			expect(error).toBeFalsy(); 
			if(error)
			{
				console.log('ERROR: ', error); 
				expect('should be no errors').toBe(false);
			}
			else
			{
				var results = response.searchResponse[0].searchResult[0].recordList[0].record;
				
				expect(results.length).toBe(1); 
				expect(results[0].name[0]).toBe('newFile1.txt');
				testUtil.log('search folder, count: '+results.length); 
			}			
			cb();
		}); 
	}); 



	it('delete the file', function(cb)
	{
		var deleteCommand1 = {
			recordType: 'file'
		,	internalId: aFileInternalId
		}
		suitetalk.delete(deleteCommand1, function(error, response, soap)
		{
			expect(error).toBeFalsy(); 
			if(error)
			{
				console.log('ERROR: ', error); 
			}
			else
			{
				// console.log('delete response', JSON.stringify(response, null, 2));
				var writeResponse = response.deleteResponse[0].writeResponse[0]; 				
				expect(writeResponse.status[0].$.isSuccess).toBe('true');
				expect(writeResponse.baseRef[0].$.internalId).toBe(aFileInternalId);
				testUtil.log('delete file: ' + writeResponse.baseRef[0].$.internalId); 
			}
			cb();
		}); 
	}); 

	it('folder search basic should return 0 results', function(cb)
	{
		suitetalk.searchBasic({
			recordType: 'file'
		,	filters: {
				folder: {
					type: 'SearchMultiSelectField'
				,	operator: 'anyOf'
				,	searchValue: [{
						type: 'RecordRef' //TODO: change type to nstype as did for add fields
						, internalId: aFolderInternalId
					}]
				}
			}
		})
		.then(function(response)
		{
			
			expect(response.searchResponse[0].searchResult[0].totalRecords[0]).toBe('0');
			testUtil.log('search folder, count: '+0); 
			cb();
		})
		.catch(function(error)
		{
			console.log(error.stack); 
			expect(error).toBeFalsy(); 
			cb();
		}); 
	}); 


	// testing upsertList - we first need to add new files and then we will try to upsertList them

	var file1Id, file2Id;
	it('add text file1', function(cb)
	{
		suitetalk.add({
			recordType: 'file'
		,	fields: [
				{name: 'name', value: 'newFile4.txt'}
			,	{name: 'fileType', value: '_PLAINTEXT'}
			,	{name: 'content', value: new Buffer("Hello World1").toString('base64')} //'aGVsbG8gd29ybGQ='
			,	{name: 'folder', nstype: 'RecordRef', internalId: aFolderInternalId}
			]
		}, function(error, response, soap)
		{
			expect(error).toBeFalsy(); 
			if(error)
			{
				console.log('ERROR: ', error); 
			}
			else
			{
				var writeResponse = response.addResponse[0].writeResponse[0]; 
				expect(writeResponse.status[0].$.isSuccess).toBe('true');
				file1Id = writeResponse.baseRef[0].$.internalId; 
				testUtil.log('add file: '+file1Id); 
				expect(parseInt(file1Id)>0).toBe(true);				
			}
			cb();
		}); 
	}); 

	it('add text file2', function(cb)
	{
		suitetalk.add({
			recordType: 'file'
		,	fields: [
				{name: 'name', value: 'newFile5.txt'}
			,	{name: 'fileType', value: '_PLAINTEXT'}
			,	{name: 'content', value: new Buffer("Hello World2").toString('base64')} //'aGVsbG8gd29ybGQ='
			,	{name: 'folder', nstype: 'RecordRef', internalId: aFolderInternalId}
			]
		}, function(error, response, soap)
		{
			expect(error).toBeFalsy(); 
			if(error)
			{
				console.log('ERROR: ', error); 
			}
			else
			{
				var writeResponse = response.addResponse[0].writeResponse[0]; 
				expect(writeResponse.status[0].$.isSuccess).toBe('true');
				file2Id = writeResponse.baseRef[0].$.internalId; 
				testUtil.log('add file: '+file2Id); 
				expect(parseInt(file2Id)>0).toBe(true);				
			}
			cb();
		}); 
	}); 


	it('upsertList', function(cb)
	{
		suitetalk.upsertList({records: [
			{
				recordType: 'file'
			,	externalId: 'newFile4.txt'
			,	fields: [
					{name: 'name', value: 'newFile4.txt'}
				,	{name: 'fileType', value: '_PLAINTEXT'}
				,	{name: 'content', value: new Buffer("Hello World2 upserted").toString('base64')} 
				,	{name: 'folder', nstype: 'RecordRef', internalId: aFolderInternalId}
				]
			}
			,{
				recordType: 'file'
			,	externalId: 'newFile5.txt'
			,	fields: [
					{name: 'name', value: 'newFile5.txt'}
				,	{name: 'fileType', value: '_PLAINTEXT'}
				,	{name: 'content', value: new Buffer("Hello World3 upserted").toString('base64')} 
				,	{name: 'folder', nstype: 'RecordRef', internalId: aFolderInternalId}
				]
			}
		]}, function(error, response, soap)
		{
			expect(error).toBeFalsy(); 
			if(error)
			{
				console.log('ERROR: ', error); 
			}
			else
			{
				expect(response.upsertListResponse[0].writeResponseList[0].status[0].$.isSuccess).toBe('true');
				expect(response.upsertListResponse[0].writeResponseList[0].writeResponse.length).toBe(2);
			}
			cb();
		}); 
	}); 
	//TODO: now get the files and verify that the content was upserted


// TODO: delete created folder in id=1 parent
}); 




