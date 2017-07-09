var http = require('http');
var fs=require('fs');
var myuser={
  "name" : "Tinnarat Aungtubnum",
  "job" : "Full-Stack Deverloper",
  "age" : 23
}
http.createServer(function(req,res) {
  res.writeHead(200,{'Content-Type':'application/json'});
    // ReadStream from index.html
  // var myStream=fs.createReadStream(__dirname+"/"+'index.html','utf8');
  res.end(JSON.stringify(myuser));
}).listen(8081,'127.0.0.1');
