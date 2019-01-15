// @module suitetalk  @class SuiteTalk
module.exports = {

	nsVersion: '2015_1'

	//@property searchPreferences
,	searchPreferences: {
		pageSize: '50'
	,	returnSearchColumns: 'true'
	,	bodyFieldsOnly: 'false'
	}

	// @method setCredentials
,	setCredentials: function (credentials)
	{
		this.credentials = credentials;

		if (credentials.nsVersion)
		{
			this.nsVersion = credentials.nsVersion
		}
	}

}; 
