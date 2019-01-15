var Q = require('q')


var Queue = function () 
{
	var lastPromise = null;

	this.add = function (context, fn) 
	{
		var methodDeferred = Q.defer(); 
		var queueDeferred = this.setup();

		if(context === undefined) { context = this; }

		// execute next queue method
		queueDeferred.done(function () 
		{
			// call actual method and wrap output in deferred
			setTimeout(function ()
			{
				fn.call(context, function()
				{
					methodDeferred.resolve();
				});
				
			}, 0);
		});

		lastPromise = methodDeferred.promise;
	};

	this.setup = function () 
	{
		var queueDeferred = Q.defer(); 

		// when the previous method returns, resolve this one
		if(!lastPromise)
		{
			lastPromise = Q.defer(); 
			lastPromise.resolve();
			lastPromise = lastPromise.promise;
		}
		lastPromise.done(function () 
		{
			queueDeferred.resolve();
		});

		return queueDeferred.promise;
	}
};

module.exports = Queue; 