//TODO: change the name of this file to print.js
// @module suitetalk @class SuiteTalk
var _ = require('underscore')
,	tool = require('./tool');

_(tool).extend({

	// print: {

	
	// }	
	addRecord: function(record)
	{
		var self = this;
		var s = '<nsmessages:record xsi:type="'+record.recordNamespace+':'+record.RecordType+'"'+
			(record.internalId ? (' internalId="'+record.internalId+'"') : '') +
			(record.externalId ? (' externalId="'+record.externalId+'"') : '') + '>\n';
		_(record.fields).each(function(field)
		{
			s += self.addRecordField(field)+'\n';
		}); 
		s += '</nsmessages:record>'; 
		return s;
	}

,	baseRef: function(record)
	{
		var s = '<nsmessages:baseRef internalId="'+record.internalId+
			'" type="'+record.recordType+'" xsi:type="nscore:RecordRef"></nsmessages:baseRef>';
		return s;
	}
			
	//@method addRecordField print the record fields of 'add' and addList actions.
,	addRecordField: function(field)
	{
		var self = this;

		field.nstype = field.nstype || 'string'; 

		var	internalIdAttr = field.internalId ? ' internalId="' + field.internalId + '"' : ''
		,	scriptIdAttr = field.scriptId ? ' scriptId="' + field.scriptId + '"' : ''
		,	typeAttr = field.type ? ' type="' + field.type + '"' : ''
		;

		if (field.nstype==='RecordRef')
		{
			return '<'+field.namespace+':'+field.name+' xsi:type="nscore:RecordRef"' +
				typeAttr + internalIdAttr + '>' + (field.value || '') + '</'+field.namespace+':'+field.name+'>'; 
		}

		else if (field.nstype==='string' || (field.nstype && field.value && typeof field.value === "string") )
		{
			return '<'+field.namespace+':'+field.name+'>'+field.value+'</'+field.namespace+':'+field.name+'>'; 
		}

		// THEN MAYBE THE FIELD IS A COMPLEX ONE WITH MANY CHILDS
		else if (Array.isArray(field.fields))
		{
			var xsiType = (field.nstypeNamespace)? field.nstypeNamespace + ':' + field.nstype : field.namespace + ':' + field.nstype;

			var complexElement = '<' + field.namespace + ':' + field.name + ' xsi:type="' + xsiType + '"' + internalIdAttr + scriptIdAttr;

			if (typeof field.replaceAll === 'boolean')
			{
				complexElement += ' replaceAll="' + field.replaceAll + '"';
			}
			
			complexElement += '>';


			field.fields.forEach(function(subfield)
			{
				subfield.namespace = subfield.namespace || field.namespace || '';
				complexElement += '\n' + self.addRecordField(subfield);
			});

			complexElement += '</' + field.namespace + ':' + field.name + '>';

			return complexElement;
		}

		//TODO: others
		// throw error doesn't works here because this is wrapped into a promise error handler that it's not captured
		console.log('Netsuite field type not supported: '+field.nstype+', field: '+JSON.stringify(field));
		throw new Error('Netsuite field type not supported: '+field.nstype+', field: '+JSON.stringify(field));
	}

	// @method searchBasicFilterPrint prints a filter on 'search' action
,	searchBasicFilterPrint: function(filters)
	{
		var s = '';
		_(filters).each(function(filter, key)
		{
			s += '\n<nscommon:'+key;

			if(filter.type)
			{
				s += ' xsi:type="nscore:'+filter.type+'"';
			}

			if (filter.type === 'RecordRef' && filter.internalId)
			{
				s += ' internalId="' + filter.internalId + '"';
			}

			if(filter.operator)
			{
				s += ' operator="'+filter.operator+'"'; 
			}

			s += '>\n';

			if (typeof filter.searchValue !== 'undefined')
			{
				if(!_(filter.searchValue).isArray())
				{
					filter.searchValue = [filter.searchValue]; 
				}
				_(filter.searchValue).each(function(searchValue)
				{
					s += '\t<nscore:searchValue';
					if(_(searchValue).isString())
					{
						s += '>' + searchValue + '</nscore:searchValue>'; 
					}
					else
					{
						s += ' xsi:type="nscore:' + searchValue.type + '"';
						_(searchValue).each(function(val,key)//dump all properties but 'type' as attributes
						{
							if(key!=='type')
							{
								s += ' '+key+'="'+val+'"';
							}
						}); 
						s += '/>';
					}
				});
			}

			s += '\n</nscommon:'+key+'>';
		}); 

		return s; 
	}


	// THIS IS MEANT TO BE USED WITH initialize AND initializeList METHODS
,	initializeRecord: function(record)
	{
		var self = this;

		var referenceType = record.referenceType;
		var referenceInternalId = record.internalId;

		if (record.reference)
		{
			referenceType = record.reference.type;
			referenceInternalId = record.reference.internalId;
		}

		var targetType = record.targetType || record.target || record.type;

		var s = '<nsmessages:initializeRecord>\n';

		s += '<nscore:type>' + targetType + '</nscore:type>\n';

		s += '<nscore:reference internalId="' + referenceInternalId + '" type="' + referenceType + '"/>'; 

		s += '</nsmessages:initializeRecord>';

		return s;
	}


	//@method getNamespaceForRecordType
,	getNamespaceForRecordType: function(type)
	{
		return this.recordTypeNamespaces[type] ? this.recordTypeNamespaces[type] : 'nsrelationships'; 
	}

	//@property {Map} getNamespaceForRecordType
,	recordTypeNamespaces: {
		'file': 'nsfilecabinet'
	,	'folder': 'nsfilecabinet'
	,	'transaction': 'nstransactions'
//	,	'promotioncode': 'nsmarketing'
	}


});

module.exports = tool; 



/*

alternative command syntax - do stright forward xml to json object transformation API: use the same json syntax as the soap msg

<nsmessages:search>
    <nsmessages:searchRecord xsi:type="nscommon:FolderSearchBasic">
      <nscommon:parent xsi:type="nscore:SearchMultiSelectField" operator="anyOf">
            <nscore:searchValue xsi:type="nscore:RecordRef" internalId="11689"/>
      </nscommon:parent>
    </nsmessages:searchRecord>
</nsmessages:search>

{
	recordType: 'folder'
,	filters: {
		parent: {
			type: 'SearchMultiSelectField'
		,	operator: 'anyOf'
		,	searchValue: [{
				type: 'RecordRef'
				, internalId: '11689'
			}]
		}
	}
}



<ns3:search>
    <ns3:searchRecord xsi:type="ns2:EmployeeSearchBasic">
        <ns2:email operator="startsWith">
            <ns1:searchValue>j</ns1:searchValue>
        </ns2:email>
    </ns3:searchRecord>
</ns3:search>

{
	recordType: 'employee'
,	filters: [
		email: {
			operator: 'startsWith'
		,	searchValue: 'j'
		}
	]}
*/


























/*
var sampleCommand = {
	recordType:'folder'
,	fields: [
		{
			operator: 'anyOf'
		,	searchType: 'SearchMultiSelectField'
		,	value: {type: 'recordRef', internalId:'11689'}
		}
	]
}
*/




		// {{#searchFilterPrint this}}
		// <nscommon:{{field}} {{#if type}} xsi:type="nscore:{{type}}"{{/if}} {{#if operator}} operator="{{operator}}"{{/if}}>
		// 	{{#each value}}
		// 	<nscore:searchValue {{#searchValueField}} {{../field}}="{{this}}"/>
		// 	{{else}}
		// 	<nscore:searchValue>{{value}}</nscore:searchValue>
		// 	{{/each}}
		// </nscommon:{{field}}>