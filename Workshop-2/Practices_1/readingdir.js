var fs = require('fs');

fs.readdir('.',function(err, data){
    if(err) throw err;
    console.log(data);
});