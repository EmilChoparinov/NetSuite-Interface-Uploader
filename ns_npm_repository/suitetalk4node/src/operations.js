
var tool = require('./tool');
var _ = require('underscore'); 

/* @module suitetalk @class SuiteTalk 
*/
_(tool).extend({

	//this api very equivalent to soap's xml api

	// @method search
	search: function(params, cb)
	{
		params.recordNamespace = params.recordNamespace || this.getNamespaceForRecordType(params.recordType);
		
		return this._request(
			'search'
		,	this._template('search.tpl', params)
		,	cb
		);
	}

	// @method searchBasic
,	searchBasic: function(params, cb)
	{
		return this._request(
			'search'
		,	this._template('searchBasic.tpl', params)
		,	cb
		);
	}

	// @method add
,	add: function(params, cb)
	{	
		params.recordNamespace = params.recordNamespace || this.getNamespaceForRecordType(params.recordType);
		_(params.fields).each(function(field)
		{
			field.namespace = field.namespace || params.recordNamespace;
		}); 
		return this._request(
			'add'
		,	this._template('add.tpl', params)
		,	cb
		);
	}

	// @method upsert
,	upsert: function(params, cb)
	{	
		params.recordNamespace = params.recordNamespace || this.getNamespaceForRecordType(params.recordType);
		_(params.fields).each(function(field)
		{
			field.namespace = field.namespace || params.recordNamespace;
		}); 
		return this._request(
			'upsert'
		,	this._template('upsert.tpl', params)
		,	cb
		);
	}

	// @method addList
,	addList: function(params, cb)
	{
		var self = this;
		_(params.records).each(function(record)
		{
			record.recordNamespace = params.recordNamespace || self.getNamespaceForRecordType(record.recordType);
			_(record.fields).each(function(field)
			{
				field.namespace = field.namespace || record.recordNamespace;
			}); 
		}); 
		
		return this._request(
			'addList'
		,	this._template('addList.tpl', params)
		,	cb
		);
	}

	// @method upsertList
,	upsertList: function(params, cb)
	{
		var self = this;
		_(params.records).each(function(record)
		{
			record.recordNamespace = params.recordNamespace || self.getNamespaceForRecordType(record.recordType);
			_(record.fields).each(function(field)
			{
				field.namespace = field.namespace || record.recordNamespace;
			}); 
		}); 
		
		return this._request(
			'upsertList'
		,	this._template('upsertList.tpl', params)
		,	cb
		);
	}


	// @method delete
,	delete: function(params, cb)
	{
		return this._request(
			'delete'
		,	this._template('delete.tpl', params)
		,	cb
		);
	}
	
	// @method deleteList
,	deleteList: function(params, cb)
	{
		var self = this;
		
		return this._request(
			'deleteList'
		,	this._template('deleteList.tpl', params)
		,	cb
		);
	}

	// @method update
,	update: function(params, cb)
	{	
		params.recordNamespace = params.recordNamespace || this.getNamespaceForRecordType(params.recordType);
		_(params.fields).each(function(field)
		{
			field.namespace = field.namespace || params.recordNamespace;
		}); 
		return this._request(
			'update'
		,	this._template('update.tpl', params)
		,	cb
		);
	}


	// @method updateList
,	updateList: function(params, cb)
	{
		var self = this;
		_(params.records).each(function(record)
		{
			record.recordNamespace = params.recordNamespace || self.getNamespaceForRecordType(record.recordType);
			_(record.fields).each(function(field)
			{
				field.namespace = field.namespace || record.recordNamespace;
			}); 
		}); 
		
		return this._request(
			'updateList'
		,	this._template('updateList.tpl', params)
		,	cb
		);
	}


	// @method get
,	get: function(params, cb)
	{
		return this._request(
			'get'
		,	this._template('get.tpl', params)
		,	cb
		);
	}

	// @method getAll
,	getAll: function(params, cb)
	{
		return this._request(
			'getAll'
		,	this._template('getAll.tpl', params)
		,	cb
		);
	}


	// @method searchMoreWithId
,	searchMoreWithId: function(params, cb)
	{
		return this._request(
			'searchMoreWithId'
		,	this._template('searchMoreWithId.tpl', params)
		,	cb
		);
	}

	// @method getCustomizationId
,	getCustomizationId: function(params, cb)
	{
		params.getCustomizationType = params.customizationType || params.getCustomizationType;

		return this._request(
			'getCustomizationId'
		,	this._template('getCustomizationId.tpl', params)
		,	cb);
	}
	
	//@method getDataCenterUrls
,	getDataCenterUrls: function(params, cb, dontVerifyDatacenterDomains)
	{
		var method = dontVerifyDatacenterDomains ? '__request' : '_request'; 
		return this[method](
			'getDataCenterUrls'
		,	this._template('getDataCenterUrls.tpl', params)
		,	cb);
	}

	
,	initialize: function (params, cb)
	{
		return this._request(
			'initialize'
		,	this._template('initialize.tpl', params)
		,	cb
		);
	}


,	initializeList: function (params, cb)
	{
		return this._request(
			'initializeList'
		,	this._template('initializeList.tpl', params)
		,	cb
		);		
	}	

	
}); 

module.exports = tool;

