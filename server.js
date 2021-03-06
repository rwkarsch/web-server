var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');
// This is a comment to test out git...
// var middleware = {
// 	requireAuthentication: function (req, res, next){
// 		console.log('private log hit!');
// 		next();
// 	},
// 	logger: function (req, res, next){
// 		newDate = new Date().toString();
// 		console.log('Request: ' + newDate + ' - ' + req.method + ' ' + req.originalUrl);
// 		next();
// 	}
// };

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT);
});