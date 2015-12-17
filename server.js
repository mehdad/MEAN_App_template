var express67=require('express')
var app=express67()
app.use('/',function(req,res){
	res.send("Hello MEAN");
}).listen(6767);

console.log('server running at http://localhost:6767');

module.exports=app;