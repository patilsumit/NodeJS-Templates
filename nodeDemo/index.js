
//*************Blocking-Sync************************ 
// var fs=require("fs");

// var data=fs.readFileSync('input.txt');
 
// console.log(data.toString());
// console.log("Program Ended....");

//*************Non-Blocking-Asyc************************ 
var fs=require("fs");

fs.readFile('input.txt',function(err,data){
  if(err)
  {
     return console.error(err);
  }
  else
  {
     console.log(data.toString());
  }
});

console.log("Program Ended....");