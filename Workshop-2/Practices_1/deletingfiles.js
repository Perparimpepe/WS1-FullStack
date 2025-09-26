var fs = require('fs');

var file = 'written.txt';
fs.unlink(file, function (err) {
    if (err) throw err;
    console.log('File deleted successfully');
});

