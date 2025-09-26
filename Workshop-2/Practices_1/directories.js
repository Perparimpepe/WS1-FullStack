const fs = require('fs');
const path = require('path');

const folderName = 'newdata';

//fs.mkdirSync(folderName);
//console.log('Folder has been created:', folderName);


//const data1 = fs.readFileSync('example.txt');
//const data2 = fs.readFileSync('example2.txt');

//const combined = data1 + '\n' + data2;

//fs.writeFileSync(path.join(folderName, 'written.txt'), combined, 'utf8');
//console.log('Tiedosto kirjoitettu kansioon', folderName);


fs.rmdirSync(folderName);
console.log('Folder Removed:', folderName);