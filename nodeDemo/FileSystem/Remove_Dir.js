var fs = require('fs');

console.log('Going to delete directory..');
fs.rmdir('../FileSystem/testdemo', function (err) {

    if (err) {
        console.error(err);
    }
    console.log('Going to read direrctory ../FileSystem');

    fs.readdir("/tmp/", function (err, files) {
        if (err) {
            return console.error(err);
        }
        files.forEach(function (file) {
            console.log(file);
        });
    });
});