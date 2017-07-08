var buf1=new Buffer('Tinnarat Aungtubnum');
var buf2=new Buffer('KMITL');
var buf3=Buffer.concat([buf1,buf2]);
console.log(buf3.toString());
