var fs=require('fs');
var data='';

//Cretae readable stream
var readerStream=fs.createReadStream('input.txt');

//Set the enconding to be utf8
readerStream.setEncoding('UTF8');

//Handle stream events data->end->error
readerStream.on('data',function(chunk){
 data=data + chunk;
})

readerStream.on('end',function() {
    console.log(data);
 });

 readerStream.on('error', function(err) {
    console.log(err.stack);
 });
 
 console.log("Program Ended");