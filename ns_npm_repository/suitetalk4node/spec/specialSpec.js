// var suitetalk = require('../src/index'); 
// var _ = require('underscore'); 

// var testUtil = require('./testUtil'); 
// var log = testUtil.log;

// describe('special', function()
// {

// 	// it('get the one folder - useful for authenticate credentials', function(cb)
// 	// {
// 	// 	var getCommand1 = 
// 	// 	suitetalk.get({
// 	// 		recordType: 'folder'
// 	// 	,	internalId: 1
// 	// 	}, function(error, response, soap)
// 	// 	{
// 	// 		expect(error).toBeFalsy(); 
// 	// 		if(error)
// 	// 		{
// 	// 			console.log('ERROR: ', error, error.stack); 
// 	// 		}
// 	// 		else
// 	// 		{
// 	// 			var readResponse = response.getResponse[0].readResponse[0]; 
// 	// 			console.log(readResponse)	
// 	// 		}
// 	// 		cb();
// 	// 	}); 
// 	// }); 

// 	it('get custom record type', function(cb)
// 	{
// 		var getCommand1 = 
// 		suitetalk.get({
// 			recordType: 'customRecordType'
// 		,	internalId: 175
// 		}, function(error, response, soap)
// 		{
// 			expect(error).toBeFalsy(); 
// 			if(error)
// 			{
// 				console.log('ERROR: ', error, error.stack); 
// 			}
// 			else
// 			{
// 				var readResponse = response.getResponse[0].readResponse[0]; 
// 				console.log(JSON.stringify(readResponse,null,2))	
// 			}
// 			cb();
// 		}); 
// 	}); 

// // 175


// 	// //search account with less credentials: didn't work - you still have to pass account
// 	// it('search account with less credentials', function(cb)
// 	// {
// 	// 	// var originalCrendentials = suitetalk.credentials
// 	// 	// ,	newCredentials = _(originalCrendentials).clone();
// 	// 	// delete newCredentials.account
// 	// 	// delete newCredentials.roleId;

// 	// 	// suitetalk.setCredentials(newCredentials);

// 	// 	suitetalk.searchBasic({
// 	// 		recordType: 'customRecordType'
// 	// 	,	searchPreferences: {pageSize: 6}
// 	// 	})
// 	// 	.then(function(response)
// 	// 	{
// 	// 		// debugger;
// 	// 		console.log(response.searchResponse);
// 	// 		cb();
// 	// 	})
// 	// 	.catch(function(error)
// 	// 	{
// 	// 		expect('no errors expected').toBeFalsy(); 
// 	// 		if(error)
// 	// 		{				
// 	// 			console.log(error.stack); 
// 	// 			expect('should be no errors').toBe(false);
// 	// 		}
// 	// 		cb();
// 	// 	}); 
// 	// }); 	

// 	// it('getDataCenterUrls with less credentials', function(cb)
// 	// {
// 	// 	suitetalk.searchBasic({
// 	// 		recordType: 'website'
// 	// 	,	searchPreferences: {pageSize: pageSize}
// 	// 	})
// 	// 	.then(function(response)
// 	// 	{
// 	// 		expect(response.searchResponse[0].searchResult[0].recordList[0].record.length).toBe(pageSize); 
// 	// 		_(response.searchResponse[0].searchResult[0].recordList[0].record).each(function(record)
// 	// 		{
// 	// 			someItems.push(record); 
// 	// 			if(record.displayName)
// 	// 			{
// 	// 				itemNames.push(record.displayName[0]);
// 	// 			}
// 	// 		}); 
// 	// 		expect(itemNames.length > 0).toBe(true); 
// 	// 		log('search item, count: '+itemNames.length); 
// 	// 		cb();
// 	// 	})
// 	// 	.catch(function(error)
// 	// 	{
// 	// 		expect('no errors expected').toBeFalsy(); 
// 	// 		if(error)
// 	// 		{				
// 	// 			console.log(error.stack); 
// 	// 			expect('should be no errors').toBe(false);
// 	// 		}
// 	// 		cb();
// 	// 	}); 
// 	// }); 

// }); 




