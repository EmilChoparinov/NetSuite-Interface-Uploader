var Uploader = require('./src/index')

// ,	suitetalk = require('suitetalk')

var credentials = {
	email: 's@gurin.com'
,	password: 'test098'
,	roleId: '3'
,	account: '3690872'
}; 


var uploader = new Uploader(credentials); 

var config = {
	targetFolderId: '41541'
,	sourceFolderPath: './testFolder'
};

var t0 = new Date().getTime();
uploader
	.main(config)
	.then(function (manifest)
	{
		var took = (new Date().getTime() - t0)/1000;
		console.log('DEPLOY FINISHED, took: ', took, 'ms')
	})
	.catch(function(err)
	{
		console.log('ERROR in deploy', e, e.stack)
	});




// uploader
// .getFileNamed('45899', 'otherfile.xml', true)
// .then(function(record)
// {
// 	var content = new Buffer(record.content[0], 'base64').toString(); 
	
// 	console.log(buffer.toString())
// 	// console.log('GET22\n\n', JSON.stringify(record));
// });





// uploader.delete('43483')
// .done(function()
// {
// 	console.log('delete global promise', arguments)
// })

// var sourceFolderPath =  './testFolder'//'/home/sg/netsuite/denali/LocalDistribution'//'./testFolder'//
// 
