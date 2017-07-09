var fs=require('fs');
var data='Tinnarat tutorial node.js express mongodb angularjs';
var writerStream=fs.createWriteStream('output.txt');

writerStream.write(data,'utf8');
writerStream.end();
writerStream.on('finish',function() {
  console.log("Output finish");
});
