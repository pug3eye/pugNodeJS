var fs=require('fs');
var readMe=fs.readFileSync('testText.txt','utf8');
// fs.writeFileSync('testText2.txt',readMe);

fs.mkdir('Project',function() {
  fs.writeFileSync('./Project/readMe.txt',readMe);
});
