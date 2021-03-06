process.env.NODE_ENV = process.env.NODE_ENV || "development" ; 

var mongoose=require('./config/mongoose'), 
	express=require('./config/express'),
	passport=require('./config/passport');

var db = mongoose();
var app = express(db);
var passport = passport();

app.listen(6767);

console.log('server running at http://localhost:6767');

module.exports = app;