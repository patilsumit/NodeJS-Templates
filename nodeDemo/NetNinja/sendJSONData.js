var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    console.log("Request is made:"+req.url);
    res.writeHead(200,{'Content-Type':'application/json'})
    var myObj={
        name :"sam_pat",
        age : "29",
        city : "dhule"
    }
    res.end(JSON.stringify(myObj));
});


server.listen(3000,'127.0.0.1');
console.log("Listeningport port 3000...");