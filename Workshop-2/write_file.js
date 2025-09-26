var fs = require('fs');

const data = 'Hello, this is a test file.\nThis file is created using Node.js fs module.';

fs.writeFile('write.txt', data, function (err) {
    if (err) throw err;
    console.log('File written successfully');
});