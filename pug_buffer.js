var buf=new Buffer(10);
console.log(buf);

var buf1=new Buffer("tinnarat",'utf8');
console.log(buf1.toString());

var buf2=new Buffer(200);
len = buf2.write('Aungtubnum');
console.log(len);

var buf3=new Buffer(200);
console.log(buf3.toString());

var buf4=new Buffer(11);
len = buf4.write('Aungtubnum');
console.log(buf4.toString());


var buf5=new Buffer(26);
for (var i =0; i < 26 ; i++) {
  buf5[i] = i + 97;
  }
  console.log(buf5);


  var buf6=new Buffer(26);
  for (var i =0; i < 26 ; i++) {
    buf6[i] = i + 97;
    }
    console.log(buf6.toString('utf8'));

    var buf7=new Buffer(26);
    for (var i =0; i < 26 ; i++) {
      buf7[i] = i + 97;
      }
      console.log(buf7.toString('ascii'));
