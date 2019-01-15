#suitetalk for node

suitetalk 2015_1 API for nodejs. 

##Install
	
	npm install

##Run unit tests 

	node node_modules/jasmine/bin/jasmine.js

##Using

See spec/*.Spec.js files for example on how to invoke suitetalk operation in node. For example: 

	// Searching items which name starts with 'Red Moustache':

	var suitetalk = require('suitetalk'); 

	//first we must provide our credentials

	suitetalk.setCredentials({
		email: 'hello@world.com'
	,	password: 'mysecret'
	,	roleId: '3'
	,	account: '3387622'
	}); 

	// now we can just start operating: 

	suitetalk.searchBasic({
		recordType: 'item'
	,	filters: {
			displayName: {
				operator: 'startsWith', searchValue: 'Red moustache'
			}
		}
	})
	.then(function(response)
	{
		var results = response.searchResponse[0].searchResult[0].recordList[0].record;
		_(results).each(function(record)
		{
			consoe.log(record.displayName)
		}); 
	})
	.catch(function(error)
	{
		console.log('ERROR: ', error, error.stack); 
	}); 


Notice how the command object is very straight forward to soap XML data and also how the response is parsed in a very low level way. This is a very low level library, we are automatically converting the soap xml response to json using xml2json library...


##Support 2015.2 API and onwards

If you want to use features from 2015.2, 2016.1 and newer APIs, please add the 'nsVersion' and the 'applicationId' entries in the credentials data:

suitetalk.setCredentials({
	email: 'hello@world.com'
,	password: 'mysecret'
,	roleId: '3'
,	account: '3387622'
,	nsVersion: '2016_1'
,	applicationId: 'MY-GENERATED-TOKEN-HERE'
}); 

*IMPORTANT*: The application ID is generated for each Application defined in your account integrations setup, don't use the default application, that entry exists only for compatibility purposes with SuiteTalk APIs older than 2015.2, create a new application entry if only the default is present if using 2015.2 or greater.


#Important

Make sure your credentials contemplate your current account's molecule and datacenter. Take a look to the following examples:

##Support netsuite's datacenters and molecules.

For example, if I want to deploy to an account that uses an url like https://system.na1.sandbox.netsuite.com, then the command would be:

	suitetalk.setCredentials({
		email: 'hello@world.com'
	,	password: 'mysecret'
	,	roleId: '3'
	,	account: '3387622'
	,	molecule: 'na1.sandbox'
	}); 

##Support netsuite's scrum VMs

SUppose now that you want to use suitetalk4node against an avvount on a netsuite's scrum VM with the url like http://sgurin.se4.eng.netsuite.com/  , then you just need to :

	suitetalk.setCredentials({
		email: 'hello@world.com'
	,	password: 'mysecret'
	,	roleId: '3'
	,	account: '3387622'
	,	vm: 'http://sgurin.se4.eng.netsuite.com'
	}); 

*IMPORTANT*: Please use http instead https in the scrum VM url since scrum vms don't have correct certificates setup and it will fail. 

#Tip how to obtain the information roleId, account, etc.

 * Enter to your netsuite account
 * open browser devtools and execute 'nlapiGetContext()' in the console. 
 * All the information like account id and role id is in that object

##About

Because the lack of good soap libraries for node and in hurry for develop a solution we decided to implement the suitetalk WS manually, using handlebars templates for write the xml operation requests and xml2js for parsing xml responsed into json.

This API try to be very straightforward from 2015_1 SOAP XML requests but in JSON. 

In src/ there is the full source code and in spec/ there are working examples.


##Mission

Implement major suitetalk operations very generic for any record using 2015_1 soap version. 

##Useful links / data

 * operations with request/response xml sample: 
 https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_N3477815
 * record browser: 
 https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2015_1/schema/record/account.html
 * the docs/ folder contains .xml response/requests examples


##Future / TODO

 * make a deploy verification utility that downloads a deployed cabinet folder and compare all its files with a fs version, using md5. We can integrate this with a previous deploy tool that stores the files ids->md5 map - then the verification tool only download the files
 *  
 * make a high level API over it, for example 

 	client.addCustomer({entityId: '', })

 * sanitize xml2js output : response.searchResponse.searchResult.recordList.record instead current : response.searchResponse[0].searchResult[0].recordList[0].record . In general we want to add high level of abstraction with easy to call and read operations. 


 * make a second 'visual' project , an html application, that use json editor to query and edit/update netsuite records. Its server will use suitetalk4node and it will serve as a proof of concept. 