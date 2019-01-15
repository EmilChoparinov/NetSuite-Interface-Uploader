var suitetalk = require('../src/index');
var _ = require('underscore');

var testUtil = require('./testUtil');
var log = testUtil.log;

describe('first tests', function()
{
	var sampleCustomerId;

	it('add a new customer', function(cb)
	{
		var addCommand1 = {
			recordType: 'customer'
		,	fields: [
				{name: 'firstName', value: 'Sebastian123234345ws'}
			,	{name: 'lastName', value: 'Gurin123234345ws'}
			,	{name: 'phone', value: '123234345'}
			,	{name: 'companyName', value: 'ABC company X123123ws'}
			,	{name: 'subsidiary', nstype: 'RecordRef', type: 'subsidiary', internalId: '1'}
			]
		};

		suitetalk.add(addCommand1, function(error, response, soap)
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
				sampleCustomerId = writeResponse.baseRef[0].$.internalId;
				log('add customer: '+sampleCustomerId);
				expect(parseInt(sampleCustomerId)>0).toBe(true);
			}
			cb();
		});
	});

	it('get the customer we just added', function(cb)
	{
		var getCommand1 = {
			recordType: 'customer'
		,	internalId: sampleCustomerId
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
				expect(readResponse.status[0].$.isSuccess).toBe('true');
				expect(readResponse.record[0].$.internalId).toBe(sampleCustomerId);
				expect(readResponse.record[0].phone[0]).toBe('123234345');
				log('get customer: ' + readResponse.record[0].$.internalId);
			}
			cb();
		});
	});

	it('delete the customer', function(cb)
	{
		var deleteCommand1 = {
			recordType: 'customer'
		,	internalId: sampleCustomerId
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
				expect(writeResponse.baseRef[0].$.internalId).toBe(sampleCustomerId);
				log('delete customer: ' + writeResponse.baseRef[0].$.internalId);
			}
			cb();
		});
	});


	it('delete the customer again should raise error', function(cb)
	{
		var deleteCommand1 = {
			recordType: 'customer'
		,	internalId: sampleCustomerId
		}
		suitetalk.delete(deleteCommand1, function(error, response, soap)
		{
			var writeResponse = response.deleteResponse[0].writeResponse[0];
			expect(writeResponse.status[0].$.isSuccess).toBe('false');
			expect(writeResponse.status[0].statusDetail[0].code[0]).toBe('RCRD_DSNT_EXIST');
			cb();
		});
	});

	it('get the customer again should raise error', function(cb)
	{
		var getCommand1 = {
			recordType: 'customer'
		,	internalId: sampleCustomerId
		}
		suitetalk.get(getCommand1, function(error, response, soap)
		{
			var readResponse = response.getResponse[0].readResponse[0];
			expect(readResponse.status[0].$.isSuccess).toBe('false');
			expect(readResponse.status[0].statusDetail[0].code[0]).toBe('RCRD_DSNT_EXIST');
			cb();
		});
	});


});




