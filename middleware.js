var middleware = {
	requireAuthentication: function (req, res, next){
		console.log('private log hit!');
		next();
	},
	logger: function (req, res, next){
		newDate = new Date().toString();
		console.log('Request: ' + newDate + ' - ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

module.exports = middleware;