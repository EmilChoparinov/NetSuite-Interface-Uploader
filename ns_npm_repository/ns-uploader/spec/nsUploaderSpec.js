var Uploader = require('../src/index');
var _ = require('underscore');
var shell = require('shelljs');
var data = require('./data');

describe('ns-uploader 1', function()
{
	var uploader, parentFolderInternalId;

	it('init', function()
	{
		uploader = new Uploader(data.credentials);
	});

	it('add a new empty folder to work with', function(cb)
	{
		uploader.mkdir('41541', 'ns-uplodaer-test_'+new Date().getTime())
		.then(function(baseRef)
		{
			expect(baseRef.internalId > 0).toBe(true)
			parentFolderInternalId = baseRef.internalId;
			cb();
		})
		.catch(function(err)
		{
			expect(err+'').toBe('');
			cb();
		})
	});

	var uploadedManifest

	it('upload something', function(cb)
	{
		shell.mkdir('testFolder2')
		shell.mkdir('testFolder2/sub1')
		shell.mkdir('testFolder2/sub2')
		shell.mkdir('testFolder2/sub2/sub22')
		shell.ShellString('Some first content').to('testFolder2/something.txt')
		shell.ShellString('Some second content').to('testFolder2/sub1/hello.txt')
		shell.ShellString('Some third content').to('testFolder2/sub2/world.txt')
		shell.ShellString('Some fourth content').to('testFolder2/sub2/sub22/helloworld.txt')

		uploader.main({
			targetFolderId: parentFolderInternalId
		,	sourceFolderPath: 'testFolder2'
		})
		.then(function(manifest)
		{
			uploadedManifest = manifest;
			cb();
		})
		.catch(function(err)
		{
			expect(err+'').toBe('');
			cb();
		})
	});





	it('remove internalids from remote manifest so we know initial manifest in bundle can be done', function(cb)
	{
		uploader.getFileNamed(parentFolderInternalId, uploader.MANIFEST_FILE_NAME, true)
		.then(function(recordRef)
		{
			var remoteManifest = JSON.parse(new Buffer(recordRef.content[0], 'base64').toString('utf-8'));
			_.each(remoteManifest, function(entry)
			{
				delete entry.internalId
			});
			return uploader.addOrUpdateFile(parentFolderInternalId, uploader.MANIFEST_FILE_NAME, JSON.stringify(remoteManifest));
		})
		.then(function()
		{
			cb();
		})
		.catch(function()
		{
			expect(err+'').toBe('');
			cb();
		});
	});


	it('check that the folder "sub2" was uploaded', function(cb)
	{
		uploader.getFolderNamed(parentFolderInternalId, 'sub2')
		.then(function(recordRef)
		{
			expect(recordRef.name[0]).toBe('sub2')
			cb()
		})
		.catch(function(err)
		{
			expect(err+'').toBe('');
			cb();
		})
	});

	var fileId1;
	it('check that the file "helloworld.txt" was uploaded ok', function(cb)
	{
		var entryFolder = _.find(uploadedManifest, function(entry){return entry.path === 'testFolder2/sub2/sub22'});
		uploader.getFileNamed(entryFolder.internalId, 'helloworld.txt', true)
		.then(function(recordRef)
		{
			fileId1 = recordRef.$.internalId;
			expect(new Buffer(recordRef.content[0], 'base64').toString('utf-8')).toBe('Some fourth content')
			cb()
		})
		.catch(function(err)
		{
			expect(err+'').toBe('');
			cb();
		})
	});

	var manifestFile1, helloworldRemoteHash1
	it('get the remote manifest file to later compare', function(cb)
	{
		uploader.getFileNamed(parentFolderInternalId, uploader.MANIFEST_FILE_NAME, true)
		.then(function(recordRef)
		{
			fileId1 = recordRef.$.internalId;
			manifestFile1 = JSON.parse(new Buffer(recordRef.content[0], 'base64').toString('utf-8'));
			expect(manifestFile1.length>0).toBe(true);
			helloworldRemoteHash1 = _.find(manifestFile1, function(entry){return entry.path === 'testFolder2/sub2/sub22/helloworld.txt'}).hash;
			// console.log('helloworldRemoteHash1', helloworldRemoteHash1)
			cb()
		})
		.catch(function(err)
		{
			expect(err+'').toBe('');
			cb();
		})
	});

	it('upload again', function(cb)
	{
		shell.ShellString('the file was updated and redeployed').to('testFolder2/sub2/sub22/helloworld.txt')

		uploader.main({
			targetFolderId: parentFolderInternalId
		,	sourceFolderPath: 'testFolder2'
		// ,	cleanManifest: true // remove the remote manifest first
		})
		.then(function(manifest)
		{
			cb();
		})
		.catch(function(err)
		{
			expect(err+'').toBe('');
			cb();
		})
	});

	it('verify file was updated', function(cb)
	{
		var entryFolder = _.find(uploadedManifest, function(entry){return entry.path === 'testFolder2/sub2/sub22'});
		uploader.getFileNamed(entryFolder.internalId, 'helloworld.txt', true)
		.then(function(recordRef)
		{
			fileId1 = recordRef.$.internalId;
			expect(new Buffer(recordRef.content[0], 'base64').toString('utf-8')).toBe('the file was updated and redeployed')
			cb()
		})
		.catch(function(err)
		{
			expect(err+'').toBe('');
			cb();
		})
	});

	it('verify remote manifest changed', function(cb)
	{
		uploader.getFileNamed(parentFolderInternalId, uploader.MANIFEST_FILE_NAME, true)
		.then(function(recordRef)
		{
			fileId1 = recordRef.$.internalId;
			manifestFile1 = JSON.parse(new Buffer(recordRef.content[0], 'base64').toString('utf-8'));
			expect(manifestFile1.length>0).toBe(true);
			var helloworldRemoteHash2 = _.find(manifestFile1, function(entry){return entry.path === 'testFolder2/sub2/sub22/helloworld.txt'}).hash;
			expect(helloworldRemoteHash1!==helloworldRemoteHash2).toBe(true);
			cb()
		})
		.catch(function(err)
		{
			expect(err+'').toBe('');
			cb();
		})
	});

	it('upload again', function(cb)
	{
		shell.ShellString('the file was updated and redeployed').to('testFolder2/sub2/sub22/helloworld.txt')

		uploader.main({
			targetFolderId: parentFolderInternalId
		,	sourceFolderPath: 'testFolder2'
		})
		.then(function(manifest)
		{
			cb();
		})
		.catch(function(err)
		{
			expect(err+'').toBe('');
			cb();
		})
	});

	it('add a new local file, upload again and verify', function(cb)
	{

		shell.ShellString('file added after').to('testFolder2/sub1/newFile.txt');

		uploader.main({
			targetFolderId: parentFolderInternalId
		,	sourceFolderPath: 'testFolder2'
		})
		.then(function()
		{
			var entryFolder = _.find(uploadedManifest, function(entry){return entry.path === 'testFolder2/sub1'});
			return uploader.getFileNamed(entryFolder.internalId, 'newFile.txt', true)
		})
		.then(function(record)
		{
			expect(new Buffer(record.content[0], 'base64').toString('utf-8')).toBe('file added after')
			cb()
		})
		.catch(function(err)
		{
			expect(err+'').toBe('');
			cb();
		})
	});







	it('end', function(cb)
	{
		shell.rm('-rf', 'testFolder2')
		cb();
	});




	//filecabinet-util : removeFileNamed and getFileNamed

	// TODO move these to a file-cabinetUtilSpec.js own file

	// it('verify file exists w getFileNamed', function(cb)
	// {
	// 	uploader.getFileNamed(parentFolderInternalId, 'something.txt')
	// 	.then(function (record)
	// 	{
	// 		expect(!record).toBe(false);
	// 		cb();
	// 	})
	// 	.catch(function (err)
	// 	{
	// 		expect('error').toBe(false);
	// 		cb()
	// 	})
	// });
	// it('removeFileNamed', function(cb)
	// {
	// 	uploader.removeFileNamed(parentFolderInternalId, 'something.txt')
	// 	.then(function()
	// 	{
	// 		cb()
	// 	})
	// 	.catch(function()
	// 	{
	// 		expect('error').toBe(false);
	// 		cb()
	// 	})
	// });
	// it('verify it was deleted w getFileNamed', function(cb)
	// {
	// 	uploader.getFileNamed(parentFolderInternalId, 'something.txt')
	// 	.then(function (record)
	// 	{
	// 		expect(!!record).toBe(false);
	// 		cb();
	// 	})
	// 	.catch(function (err)
	// 	{
	// 		expect('error').toBe(false);
	// 		cb()
	// 	})
	// });


});




