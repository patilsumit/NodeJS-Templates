var fs=require('fs');
var data='Write Sumit Patil Data In New File';

//Cretae readable stream
var WriterStream=fs.createWriteStream('output.txt');

//Set the enconding to be utf8
WriterStream.write(data,'UTF8');

//End of the file
WriterStream.end();

//Handle stream events Finish the error
WriterStream.on('finish',function(chunk){
   console.log("Data Write Completed");
});

WriterStream.on('error', function(err) {
    console.log(err.stack);
 });
 
 console.log("Program Ended");