var _ = require('underscore')
,	tool = require('../tool');

// @module suitetak.easy
//@class SuiteTalk
tool.easy.filecabinet={
	// @method addFolder @param {Folder} @return {Deferred}
	addFolder: function(folder, cb)
	{
		var command = {
			recordType: 'folder'
			//@class Folder
		,	fields: [
				// @param {String} name
				{name: 'name', value: folder.name}

				// @param {String} parent internalId of parent folder
			,	{name:'parent', nstype: 'RecordRef', type: 'folder', internalId: folder.parent}
			]
			//@class SuiteTalk
		}; 
		return tool.add(command, cb); 
	}
,	addFile: function(params)
	{

		
	}
};

module.exports.tool;