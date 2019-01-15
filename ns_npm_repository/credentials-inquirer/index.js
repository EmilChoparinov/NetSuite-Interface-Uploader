var inquirer = require('inquirer')
,	Q = require('q')
,	request = require('request')
,	_ = require('underscore')
,	suitetalk = require('suitetalk')

var Tool = function()
{
	this.credentials = {};
	this.config = {
		startFolderId: '-100'
	}
};


module.exports = Tool;

//@module credentials-inquirer @class CredentialsInquirer
_(Tool.prototype).extend({


	//main tool


	//@method main @return {Deferred}
	main: function()
	{
		var deferred =  Q.defer()
		,	self = this


		self.resolvedPromise()

		.then(function()
		{
			return self.inquire([{
				type: 'email'
			,	name: 'email'
			,	message: 'Email'
			}])
		})

		.then(function()
		{
			return self.inquire([{
				type: 'password'
			,	name: 'password'
			,	message: 'Password'
			}]);
		})

		.then(function()
		{
			return self.getRoles();
		})

		.then(function()
		{
			return self.selectRole();
		})


		//mocking data for testing
		// .then(function()
		// {
		// 	self.credentials = {"nsVersion":"2016_1","email":"s@gurin.com","password":"Test123$$$","role":{"account":{"internalId":"3690872","name":"Cabo Polonio Store - PSG_Automation"},"role":{"internalId":3,"name":"Administrator"},"dataCenterURLs":{"webservicesDomain":"https://webservices.netsuite.com","restDomain":"https://rest.netsuite.com","systemDomain":"https://system.netsuite.com"}}}
		// 	// console.log(JSON.stringify(self.credentials))
		// 	return self.resolvedPromise()
		// })

		.then(function()
		{
			return self.selectFolder(self.config.startFolderId)
		})

		.then(function(selectedFolderRecord)
		{
			self.credentials.selectedFolderRecord = selectedFolderRecord
			deferred.resolve()
		})

		.catch(function(err)
		{
			deferred.reject(err)
		})

		return deferred.promise
	}

,	selectFolder: function(parentFolder)
	{
		var deferred = Q.defer()
		,	self = this
		this.selectOneFolder(parentFolder).then(function(folderRecord)
		{
			inquirer.prompt([{
				type: 'list'
				,	name: 'folderAction'
				,	message: 'Action on selected folder ('+folderRecord.name[0]+')'
				,	choices: ['Select a child', 'Select this one', 'Go back']
			}]).then(function(answers)
			{
				if(answers.folderAction === 'Select this one')
				{
					deferred.resolve(folderRecord)
				}
				else if(answers.folderAction === 'Select a child')
				{
					var ui = new inquirer.ui.BottomBar();
					ui.log.write("Getting children...");
					deferred.resolve(self.selectFolder(folderRecord.$.internalId)) //recursive!
				}
				else
				{
					ui.log.write("Not implemented...");
					throw new Error("Go Back, not implemented...");
				}
			})
		})
		return deferred.promise
	}
,	selectOneFolder: function(parentFolder)
	{
		var deferred = Q.defer()
		,	self = this
		self.listFolderChildren(parentFolder)
		.then(function(recordList)
		{
			var choices = _(recordList).map(function(r)
			{
				return {
					name: r.name[0]
					, value: r
				};
			});
			inquirer.prompt([{
				type: 'list'
			,	name: 'targetFolder'
			,	message: 'Select a folder'
			,	choices: choices
			}]).then(function(answers)
			{
				deferred.resolve(answers.targetFolder)
			});
		})
		.catch(function(err)
		{
			deferred.reject(err)
		})

		return deferred.promise
	}

,	resolvedPromise: function(val)
	{
		var deferred = Q.defer()
		deferred.resolve(val)
		return deferred.promise
	}

,	setSuitetalkCredentials: function()
	{
		// console.log(this.credentials)
		var suitetalkCrendentials = {
			password: this.credentials.password
		,	email: this.credentials.email
		,	account: this.credentials.role.account.internalId
		,	roleId: this.credentials.role.role.internalId
		,	vm: this.credentials.vm
		,	nsVersion: this.credentials.nsVersion
		,	applicationId: this.credentials.applicationId
		}
		suitetalk.setCredentials(suitetalkCrendentials)
	}

,	listFolderChildren: function(parentFolderId)
	{
		var deferred =  Q.defer()
		,	self = this

		self.setSuitetalkCredentials()

		suitetalk.searchBasic({
			recordType: 'folder'
		,	filters: {
				parent: {
					type: 'SearchMultiSelectField'
				,	operator: 'anyOf'
				,	searchValue: [{
						type: 'RecordRef'
						, internalId: parentFolderId
					}]
				}
			}
		})
		.then(function(response)
		{
			var recordList = response.searchResponse[0].searchResult[0].recordList[0].record
			deferred.resolve(recordList)
		})
		.catch(function(error)
		{
			// the first time we use suitetalk it might fail, for example with invalidApplicationId.
			console.log('ERROR', error, 'Exiting')
			process.exit(1);
			deferred.reject(error)
		});

		return deferred.promise;
	}

,	inquire: function(questions, dontSet)
	{
		var deferred =  Q.defer()
		,	self = this
		questions = _.isArray(questions) ? questions : [questions];
		inquirer.prompt(questions).then(function(answers)
		{
			if(!dontSet)
			{
				_(self.credentials).extend(answers);
			}
			deferred.resolve(answers)
		});
		return deferred.promise;
	}




	//roles

,	selectRole: function()
	{
		var deferred =  Q.defer()
		,	self = this
		,	choices = _(this.credentials.roles).map(function(r)
			{
				return {
					name: r.role.name + ' @ ' + r.account.name
					, value: r
				};
			})
		inquirer.prompt([{
			type: 'list'
		,	name: 'role'
		,	message: 'Select a role'
		,	choices: choices
		}]).then(function(answers)
		{
			_(self.credentials).extend(answers);

			//delete the roles list cause is not relevant for a credential
			self.credentials.roles = undefined;
			self.credentials.dataCenterURLs = undefined; //TODO: this might be relevant don't delete

			deferred.resolve(answers)
		});
		return deferred.promise;
	}


	//@method getRoles @return {Deferred} @param {Config} config
,	getRoles: function(config)
	{
		config = config || this.credentials;
		var deferred =  Q.defer()
		,	self = this
		,	requestUrl
		,	headers = {
				'Accept': '*/*'
			,	'Accept-Language': 'en-us'
			,	'Authorization': 'NLAuth nlauth_email=' + config.email + ', nlauth_signature=' + encodeURIComponent(config.password)
			};
		if(config.molecule)
		{
			requestUrl = 'https://rest.'+ config.molecule + '.netsuite.com/rest/roles';
		}
		else if(config.vm)
		{
			requestUrl = config.vm + '/rest/roles';
		}
		else
		{
			requestUrl = 'https://rest.netsuite.com/rest/roles';
		}


		request.get(
			requestUrl
		,	{
				headers: headers
			,	rejectUnauthorized: false
			}
		,	function(err, request, response_body)
			{
				if (err)
				{
					deferred.reject(err)
				}
				else
				{
					var response = JSON.parse(response_body)
					if (response.error)
					{
						deferred.reject(response.error)
					}
					else
					{
						self.credentials.roles = response
						// we now remove the password since we don't want to be serialized
						// self.credentials.password = undefined;
						deferred.resolve(self.credentials)
					}
				}
			}
		)

		return deferred.promise
	}


,	getAsNsDeploy: function(credentials)
	{
		credentials = credentials || this.credentials;
		return {
			email: credentials.email
		,	role: credentials.role.role.internalId
		,	account: credentials.role.account.internalId
		,	target_folder: credentials.selectedFolderRecord.$.internalId
		,	password: credentials.password
		}
	}

,	getAsNsUploader: function(credentials)
	{
		credentials = credentials || this.credentials;
		return {
			email: credentials.email
		,	roleId: credentials.role.role.internalId
		,	account: credentials.role.account.internalId
		,	target_folder: credentials.selectedFolderRecord.$.internalId
		,	password: credentials.password
		,	molecule: credentials.molecule
		,	vm: credentials.vm
		}


	}
});




// @class Config
// @property email
// @property password
// @property molecule