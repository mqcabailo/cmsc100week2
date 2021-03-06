var express = require('express');
var app = express();
/*
app.get('/',function(req,res){
      res.send('Hello World!');
});

app.get('/students',function(req,res){
      res.send('Hello students');
});

*/
//yes
app.use(require('body-parser')());
app.use(require('method-override')());
app.use(require(__dirname+'/config/router')(express.Router()));
app.use(express.static(__dirname+'/public'));

var server = app.listen(5000,function(){
      var host = server.address().address;
      var port = server.address().port;
      console.log('Examples app listening at http://%s:%s',host,port);
});