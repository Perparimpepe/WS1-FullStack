const fs = require('fs');

fs.readFile('file1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Contents of file1.txt:');
    console.log(data);
});