// var http=require('http');
// var fs=require('fs');

// var server=http.createServer(function(req,res){
//     console.log("Request was made: " + req.url);
//     // res.writeHead(200,{'Content-Type': 'text/plain'});
    
//     if(req.url === '/home' || req.url === '/'){
//          res.writeHead(200,{'Content-Type': 'text/html'});
//          fs.createReadStream(__dirname + '/index.html').pipe(res);
//     }
//     else if(req.url === '/contact'){
//         res.writeHead(200,{'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/contactus.html').pipe(res); 
//     }
//     else if(req.url === '/api/ninja'){
//        var ninja=[{'name': 'lucky',age : 21},{'name':'Dhiraj',age : 18}];
//        res.writeHead(200,{'Content-Type': 'application/json'});
//        res.end(JSON.stringify(ninja));
//     }
//     else{
//         res.writeHead(200,{'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res); 
//     }
            
//     // res.end('Feed To Feedback...');
// });

// server.listen(300);
// console.log("Now Listening to port 3000...");