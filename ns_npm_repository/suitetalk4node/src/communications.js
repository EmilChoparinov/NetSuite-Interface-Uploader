// @module suitetalk @class SuiteTalk

var tool = require('./tool')
,	_ = require('underscore')
,	request = require('request')
,	xml2js = require('xml2js')
,	Q = require('q')
,	Queue = require('./queue');
; 

_(tool).extend({

	_xml2jsOptions: {
		tagNameProcessors: [xml2js.processors.stripPrefix]
	}

,	getQueue: function()
	{
		if (!this._queue)
		{
			this._queue = new Queue();
		}

		return this._queue;
	}

,	_verifyDataCenterUrls: function()
	{
		var self = this
		self.dataCentersDeferred =  Q.defer();
		
		self.getDataCenterUrls({
			account: self.credentials.account
		}, null, true) 
		.then(function(response)
		{
			var result = response.getDataCenterUrlsResponse[0].getDataCenterUrlsResult[0];
			if(result.status[0].$.isSuccess!=='true')
			{
				self.dataCentersDeferred.reject(result.status[0].$)
			}
			else
			{
				self.dataCenterDomains = {
					rest: result.dataCenterUrls[0].restDomain
				,	webservices: result.dataCenterUrls[0].webservicesDomain
				,	system: result.dataCenterUrls[0].systemDomain
				}; 
				self.dataCentersDeferred.resolve(self.dataCenterDomains); 
			}
		})
		.catch(function(error)
		{
			self.dataCentersDeferred.reject(error);
		}); 
		return self.dataCentersDeferred.promise; 
	}

	// @method _request perform the request for given action. The 'action' template will be executed
	// and the response is automatically transformed to json with xml2js defaults. The first time is
	// executed it verify and sets the correct datacenter domain for subsequent calls
	// @param {String} action @param {Object} payload @param {Function} cb 
	// @return {Deferred} that will be rejected on http error or resolved with the response data
,	_request: function(action, payload, cb)
	{
		var self = this, selfArgs = arguments; 
		if(self.dataCenterDomains && self.dataCenterDomains.webservices)
		{
			return self.__request.apply(this, arguments); 
		}

		var dataCenterPromise

		// heads up ! we are always calling getDatacenterUrls operation the first time to get the correct suitetalk datacenter urls. 
		// But this operation don't work in vms
		if(this.credentials.vm)
		{
			dataCenterPromise = Q.defer();
			dataCenterPromise.resolve();
			dataCenterPromise = dataCenterPromise.promise;
		}
		else
		{
			dataCenterPromise = self.dataCentersDeferred ? self.dataCentersDeferred.promise : self._verifyDataCenterUrls(); 
		}
		var requestPromise = Q.defer();

		dataCenterPromise
		.then(function()
		{
			self.__request.apply(self, selfArgs)
			.then(function(){requestPromise.resolve(arguments[0])})
			.catch(function(){requestPromise.reject(arguments[0])}); 
		})
		.catch(function(error)
		{
			requestPromise.reject(error);
		})
		return requestPromise.promise;
	}

,	getDefaultWebServiceUrl: function()
	{
		if (this.credentials.molecule)
		{
			return 'https://webservices.' + this.credentials.molecule + '.netsuite.com'	
		}
		if(this.credentials.vm)
		{
			return this.credentials.vm;
		}
		else
		{
			return 'https://webservices.netsuite.com'	
		}
	}

	//@method __request - has the same signature as _request but it won't perform the data center domain verification. 
,	__request: function(action, payload, cb)
	{
		var self = this
		,	deferred =  Q.defer(); 		
		cb = cb || function(){}; 
		var datacenterDomain =  self.dataCenterDomains && self.dataCenterDomains.webservices || this.getDefaultWebServiceUrl(); 
		// console.log('datacenterDomain', datacenterDomain, datacenterDomain + '/services/NetSuitePort_' + self.nsVersion)

		this.getQueue().add(self, function(taskDone)
		{
			var req = request({
					method: 'POST'
				,	uri: datacenterDomain + '/services/NetSuitePort_' + self.nsVersion
				,	headers: {
						'User-Agent': self.credentials.user_agent || 'Node-SOAP/0.0.1'
					,	'Accept': 'text/html,application/xhtml+xml,application/xml,text/xml;q=0.9,*/*;q=0.8'
					,	'Accept-Encoding': 'none'
					,	'Accept-Charset': 'utf-8'
					,	'Connection': 'close'
					,	'Content-Type': 'text/xml; charset=utf-8'
					,	'SOAPAction': '"' + action + '"'
					}
			}, function(err, response)
			{
				if (err)
				{
					return cb(err);
				}

				self.log('Response text for action: ' + action + '\n' + response.body); 
				xml2js.parseString(response.body, self._xml2jsOptions , function(err, result)
				{
					if (err)
					{
						deferred.reject(err); 
						return cb(err);
					}
					var soap_body = result.Envelope.Body[0];
					if (soap_body && soap_body.Fault)
					{
						deferred.reject(new Error(soap_body.Fault[0].faultstring[0])); 
						return cb(new Error(soap_body.Fault[0].faultstring[0]));
					}
					deferred.resolve(soap_body);
					taskDone();

					cb(null, soap_body, result);
				});
			});
			
			self.log('Request text for action: ' + action+'\n'+ payload); 
			req.end(payload);
		});
		
		return deferred.promise; 
	}

}); 

module.exports = tool; 

