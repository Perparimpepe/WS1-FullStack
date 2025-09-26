var fs = require('fs');

var data1 = fs.readFileSync('example.txt', 'utf8');
var data2 = fs.readFileSync('example2.txt', 'utf8');

var combined ="I wrote this!\n" + data1 + '\n' + data2 + '\n'+ "This is all of me";

fs.writeFile('written.txt', combined, function (err) {
    if (err) throw err;
    console.log('File written successfully');
});
