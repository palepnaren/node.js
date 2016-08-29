var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/',function(request, response){
  response.sendFile(__dirname + "/index.html");
});

var port = process.env.PORT || 9000;
var server = app.listen(port,function(req,res){
  console.log("server started at port: " +port);
});
