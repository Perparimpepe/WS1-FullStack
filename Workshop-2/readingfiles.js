var fs = require('fs');

console.log('Going to read file')
var data1 = fs.readFileSync('example.txt');
var data2 = fs.readFileSync('example2.txt');

console.log(data1.toString());
console.log(data2.toString());

console.log('Program Ended');