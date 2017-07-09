// pipe

var fs=require('fs');
var reader=fs.createReadStream('testText.txt');
var writer=fs.createWriteStream('file1.txt');


reader.pipe(writer);
