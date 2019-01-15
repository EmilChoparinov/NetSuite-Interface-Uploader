var suitetalk = require('../src/index');

var testUtil = {
	log: function (m){console.log(m);}

,	init: function()
	{
		if(!this.initialized)
		{
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 60 * 1000;
			suitetalk.setCredentials({
				email: 's@gurin.com'
			,	password: 'Pepe8080__$$'
			,	roleId: '3'
			,	account: this.account
			});
			this.initialized=true;
		}
	}

,	account: '3690872'
};

testUtil.init();

module.exports = testUtil;