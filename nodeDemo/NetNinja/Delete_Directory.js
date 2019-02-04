var fs= require('fs');

// fs.unlink('text.txt');

// fs.mkdirSync('Inner');  //Create Directory

// fs.rmdirSync('Inner');  //remove directory
// -----------Asynchrous remove directory

fs.mkdir('Inner',function(){
    fs.readFile('input.txt','utf8',function(err,data){
        fs.writeFile('./Inner/WriteStream.txt',data);
    });
});

//----
// fs.unlink('./Inner/WriteStream.txt',function(){
//     fs.rmdir('Inner');
// })