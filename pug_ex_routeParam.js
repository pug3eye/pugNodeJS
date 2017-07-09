var express=require('express');
var app=express();
app.get('/',function(req,res){
  res.send("<h1>HelloWorldExpress</h>");
});
// route Params, here it
app.get('/user/profile/:id',function(req,res){
  res.send("<h1>Detail of Aungtubnum by "+req.params.id+"</h>");
});

//MiddleWare is Fillter of Params
app.use('/user/:isdn',function(req,res,next) {
    res.send("<h1>Request of MVD is "+req.params.isdn+"</h>");
    console.log("Request : "+req.params.isdn+"///" +new Date(), req.method,req.url);
});

app.listen(3000);
