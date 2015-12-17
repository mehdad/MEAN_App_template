var express=require('./config/express')

var app=express()
app.listen(6767);

console.log('server running at http://localhost:6767');

module.exports=app;