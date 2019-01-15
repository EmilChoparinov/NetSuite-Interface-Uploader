var suitetalk = require('../src/index'); 
var _ = require('underscore'); 

var testUtil = require('./testUtil'); 
var log = testUtil.log;

describe('item search tests', function()
{
	var someItems = []; 
	var itemNames = [];
	var pageSize = 6;

	// it('search websites', function(cb)
	// {
	// 	suitetalk.searchBasic({
	// 		recordType: 'website'
	// 	,	searchPreferences: {pageSize: pageSize}
	// 	})
	// 	.then(function(response)
	// 	{
	// 		expect(response.searchResponse[0].searchResult[0].recordList[0].record.length).toBe(pageSize); 
	// 		_(response.searchResponse[0].searchResult[0].recordList[0].record).each(function(record)
	// 		{
	// 			someItems.push(record); 
	// 			if(record.displayName)
	// 			{
	// 				itemNames.push(record.displayName[0]);
	// 			}
	// 		}); 
	// 		expect(itemNames.length > 0).toBe(true); 
	// 		log('search item, count: '+itemNames.length); 
	// 		cb();
	// 	})
	// 	.catch(function(error)
	// 	{
	// 		expect('no errors expected').toBeFalsy(); 
	// 		if(error)
	// 		{				
	// 			console.log(error.stack); 
	// 			expect('should be no errors').toBe(false);
	// 		}
	// 		cb();
	// 	}); 
	// }); 

	it('search products, no filter, store should contain at least one named item', function(cb)
	{
		suitetalk.searchBasic({
			recordType: 'item'
		,	searchPreferences: {pageSize: pageSize}
		})
		.then(function(response)
		{
			expect(response.searchResponse[0].searchResult[0].recordList[0].record.length).toBe(pageSize); 
			_(response.searchResponse[0].searchResult[0].recordList[0].record).each(function(record)
			{
				someItems.push(record); 
				if(record.displayName)
				{
					itemNames.push(record.displayName[0]);
				}
			}); 
			expect(itemNames.length > 0).toBe(true); 
			log('search item, count: '+itemNames.length); 
			cb();
		})
		.catch(function(error)
		{
			expect('no errors expected').toBeFalsy(); 
			if(error)
			{				
				console.log(error.stack); 
				expect('should be no errors').toBe(false);
			}
			cb();
		}); 
	}); 

	it('now that we know some item names, search using a filter', function(cb)
	{
		suitetalk.searchBasic({
			recordType: 'item'
		,	filters: {
				displayName: {
					operator: 'startsWith',searchValue: itemNames[0]
				}
			}
		})
		.then(function(response)
		{
			_(response.searchResponse[0].searchResult[0].recordList[0].record).each(function(record)
			{
				someItems.push(record); 
				if(record.displayName)
				{
					itemNames.push(record.displayName[0]);
				}
			}); 
			expect(itemNames.length > 0).toBe(true); 
			log('search item, count: '+itemNames.length); 
			cb();
		})
		.catch(function(error)
		{
			console.log(error.stack); 
			expect(error).toBeFalsy(); 
			cb();
		}); 
	}); 

	it('search matrix parents', function(cb)
	{
		suitetalk.searchBasic({
			recordType: 'item'
		,	filters: {
				matrix: {searchValue: 'true'}
			}
		})
		.then(function(response)
		{
			// expect(response.searchResponse[0].searchResult[0].recordList[0].record.length).toBe(pageSize); 
			var records = response.searchResponse[0].searchResult[0].recordList[0].record
			,	matrixItemsNames = [];
			_(records).each(function(record)
			{
				matrixItemsNames.push(record); 
				if(record.displayName)
				{
					matrixItemsNames.push(record.displayName[0]);
				}
			}); 
			// expect(itemNames.length > 0).toBe(true); 
			console.log('matrix parents found: '+matrixItemsNames); 
			log('search item, count: '+matrixItemsNames.length); 
			cb();
		})
		.catch(function(error)
		{
			expect('no errors expected').toBeFalsy(); 
			if(error)
			{				
				console.log(error.stack); 
				expect('should be no errors').toBe(false);
			}
			cb();
		}); 
	}); 
}); 






