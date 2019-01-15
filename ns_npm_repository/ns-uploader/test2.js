var Uploader = require('./src/index')

// ,	suitetalk = require('suitetalk')

var credentials = {
	email: 's@gurin.com'
,	password: 'test098'
,	roleId: '3'
,	account: '3690872'
}; 


var uploader = new Uploader(credentials); 

uploader.mkdir('41541', 'mkdirtest')
.then(function(recordRef)
{
     console.log('mkdir', recordRef);
})
.catch(function(err)
{
    console.log('mkdir error', err, err.stack)
})

// var config = {
// 	folderMode: 'useIt'
// ,	targetFolderId: '41541'
// ,	sourceFolderPath:'./testFolder'
// }; 

// var t0 = new Date().getTime();

// uploader
// 	.main(config)
// 	.then(function (children)
// 	{
// 		var took = (new Date().getTime() - t0) / 1000;
// 		console.log('DEPLOY FINISHED, all information available in variable children, took: ', 
// 			took, 'ms');
// 	})
// 	.catch(function(err)
// 	{
// 		console.log('ERROR in deploy', e, e.stack)
// 	});




// uploader.getFileContentHash('testFolder/a file 1.txt').then(function(hash){console.log('HASH', hash)})
// var manifest =
//  [ { path: 'testFolder/a file 1.txt',
//     type: 'file',
//     internalId: '125819',
//     parentFolderId: '46444' },
//   { path: 'testFolder/aFolder1',
//     type: 'folder',
//     internalId: '46445',
//     parentFolderId: '46444' },
//   { path: 'testFolder/aFolder1/anotherfile.txt',
//     type: 'file',
//     internalId: '125821',
//     parentFolderId: '46445' },
//   { path: 'testFolder/aFolder1/newFolder2',
//     type: 'folder',
//     internalId: '46447',
//     parentFolderId: '46445' },
//   { path: 'testFolder/aFolder1/newFolder2/test123.txt',
//     type: 'file',
//     internalId: '125822',
//     parentFolderId: '46447' },
//   { path: 'testFolder/cli',
//     type: 'folder',
//     internalId: '46446',
//     parentFolderId: '46444' },
//   { path: 'testFolder/cli/this is just a test.js',
//     type: 'file',
//     internalId: '125823',
//     parentFolderId: '46446' },
//   { path: 'testFolder/otherfile.xml',
//     type: 'file',
//     internalId: '125820',
//     parentFolderId: '46444' } ]

// uploader.addFileContentHashTo(manifest).then(function(manifest)
// {
// 	// console.log(manifest)
// })

// uploader.buildLocalManifest('./testFolder').then(function(manifest){console.log(manifest)})