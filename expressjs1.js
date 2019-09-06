var express=require('express');
var app=express();
app.get('/', function (req, res) {
	res.send('hello world!');
});
	var server = app.listen(3000, function () {
});



app.route('/Node').get(function(req,res)
{
	res.send("tutorial on node");
});
app.route('/Angular').get(function(req,res)
{
	res.send("tutorial on angular");
});
app.get('/', function (req,res) {
	res.send('welcome to Manasa web');
});


  