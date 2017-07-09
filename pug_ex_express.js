var express=require('express');
var routing=express();
routing.get('/home',function(req,res){
  res.send("<h1>HelloWorldExpress</h>");
});
routing.listen(3000);
