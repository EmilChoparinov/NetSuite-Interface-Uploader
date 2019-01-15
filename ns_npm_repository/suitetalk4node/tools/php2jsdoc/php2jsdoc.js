
var netsuite_service_php = 'NetSuiteService.php'
,	fs = require('fs')
,	path = require('path')
,	_ = require('underscore')
;

var php = fs.readFileSync(netsuite_service_php).toString(); 
// php = 'sd sdf class Tree extends Living  sdf '+
// 	'\n static $paramtypesmap = array( \n"actualWork" => "SearchDoubleField", \n\t  "assignee" => "SearchMultiSelectField"\n) ak '+
// 	'sjldkja class A extends B  laksjdlkas class D sl kd'

var paramRegex = /static\s+\$paramtypesmap\s*=\s*array\s*\(([^\)]*)\)/g;

var classRegex = /(?:class\s+([^\s]+)\s+extends\s+([^\s]+))|(?:class\s+([^\s]+))/g;

var classes = [];

function parseParams(text)
{
	var params_output = []; 
	text = text.trim();
	var params = text.split(',');
	params.forEach(function(param)
	{
		var b = param.split('=>');
		for (var i = 0; i < b.length; i+=2) 
		{
			if(!(b[i]&&b[i+1]))
			{
				break;
			}
			params_output.push({
				name: removeQuotes(b[i].trim())
			,	type: removeQuotes(b[i+1].trim())
			});
		}
	})
	
	return params_output;
}

function removeQuotes(s)
{
	return s.substring(1, s.length-1); 
}

var typeMap= {
	'string': 'String'
}; 

function mapType(t)
{
	return typeMap[t] ? typeMap[t] : t; 
}
while (true)
{
	var result = classRegex.exec(php); 
	if(!result)
	{
		break;
	}
	var className, extendName;
	if(result[1]&&result[2])
	{
		className = result[1];
		extendName = result[2];
	}
	else
	{
		className = result[3];
	}

	classes.push({name: className, extends: extendName, index: result.index});
}

for (var i = 0; i < classes.length; i++) 
{
	var c = classes[i]; 
	paramRegex.lastIndex = c.index; 
	var result = paramRegex.exec(php); 
	if(!result)
	{
		break;
	}
	var paramText = result[1];
	c.params = parseParams(paramText); 
};


// console.log(classes)
var jsdoc = []; 
jsdoc.push('/* @module suitetalk */')
_(classes).each(function(c)
{	
	jsdoc.push('/*'); 
	jsdoc.push('@class '+c.name + (c.extends ? (' @extends ' + c.extends) : ''));
	_(c.params).each(function(p)
	{
		jsdoc.push('@property {' + mapType(p.type) + '} ' + p.name); 
	}); 
	jsdoc.push('*/'); 
}); 

// var jsdocString = '/*\n' + jsdoc.join('\n') + '\n*/'; 
fs.mkdir('output');
fs.writeFileSync(path.join('output', 'output.js'), jsdoc.join('\n')); 

var ShortJsDoc = require('short-jsdoc');
ShortJsDoc.make({
    inputDirs: ['./output']
,   output: 'jsdoc'
,   projectMetadata: './package.json'
,   vendor: ['javascript']
}); 