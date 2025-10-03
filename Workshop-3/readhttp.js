const { request } = require('express');
var https = require('https');
const path = require('path');

// API KEY ei ole oikea, katso oikea
var options = {
    hostname: 'www.omdbapi.com',
    // port: 443,
    path: '/?ts=star+wars&apikey=thewdb',
    method: 'get'      
    }

const req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
    var data = '';

    res.on('data', chunck => {
        
        data += chunck;
        process.stdout.write(chunck);
    });

    res.on('end', () => {
        jsData = JSON.parse(data);
        console.log(data);
    });
 });

req.on('error', (e) => {
    console.error(e);
});
req.end();