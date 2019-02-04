console.log(__dirname);
console.log(__filename);


var  url="http://mylogger.io/log";

function log(message){
   //Send the HTTP Request..
   console.log(message);
}

module.exports=log;

