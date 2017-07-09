var fs=require('fs');
var data='';
var readStream=fs.createReadStream('testText.txt');
readStream.setEncoding('utf8');
readStream.on('data',function(txt){
  data+=txt;
});
readStream.on('end',function() {
  console.log(data);
});
readStream.on('error',function(err) {
    console.log(err.stack);
});
