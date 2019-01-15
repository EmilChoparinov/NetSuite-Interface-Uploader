var tool = require('./tool')
,	_ = require('underscore')
,	fs = require('fs')
; 

_(tool).extend({

	debug: false

,	log: function(msg, type)
	{
		if (!this.debug)
		{
			return;
		}
		type = type || 'info'; 
		fs.appendFileSync('log.txt', '\n\n\n\n\n\n' + type.toUpperCase() + '\n' + msg);
	}

,	logXML: function(label, xml, type)
	{
		// xml = prettyData.xml(xml); 
		var msg = label+'\n'+xml;
		this.log(msg, type); 
	}
	
}); 

module.exports = tool; 