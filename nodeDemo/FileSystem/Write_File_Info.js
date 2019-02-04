var fs = require('fs');

console.log("Going to file write into exsiting file");
fs.writeFile('input.txt', 'write file data into file patil system', function (err) {

    if (err) {
        console.error(err);
    }

    console.log("Data written successfully!");
    console.log("Let's read newly written data");

    fs.readFile('input.txt', function (err, data) {
        if (err) {
            console.error(err);
        }

      console.log("Asynchronous Read:" , data.toString());  
    });

});