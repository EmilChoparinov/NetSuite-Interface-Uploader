var Tool = require('./index.js');

var tool = new Tool()
tool.main()
.then(function()
{
	console.log('CREDENTIALS OBTAINED: ', arguments, JSON.stringify(tool.credentials,null,2))
})
.catch(function(err)
{
	console.log('Error obtaining credentials: ', err, err.stack)
})