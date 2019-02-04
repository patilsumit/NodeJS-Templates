var fs=require('fs');

console.log('Going to get file info');
fs.stat('input.txt',function(err,stats){
   if(err){
     console.error(err);
   }
   console.log(stats);
   console.log("Got File Info Succesfully");

   //check File type
   console.log('isFile ? ',stats.isFile());
   console.log('isDirectory ? ',stats.isDirectory());
});