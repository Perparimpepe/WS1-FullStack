var express = require('express');
var app = express();
const fs = require('fs');
const path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/list', function (req, res) {
  fs.readFile(path.join(__dirname, 'example.txt'), 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file');
    const lines = data.trim().split('\n');
    const headers = lines[0].split('|').map(h => h.trim());
    const rows = lines.slice(1).map(line =>
      '<tr>' + line.split('|').map(cell => `<td>${cell.trim()}</td>`).join('') + '</tr>'
    ).join('');
    const html = `
      <table border="1">
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;
    res.send(html);
  });
});

app.get('/details', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    const jsonData = JSON.parse(data);
    const headers = Object.keys(jsonData[0]);
    const rows = jsonData.map(obj =>
      `<tr>${headers.map(h => `<td>${obj[h]}</td>`).join('')}</tr>`
    ).join('');

    const html = `
      <table border="1">
        <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    `;

    res.send(html);
  });
});

app.get('/add', function (req, res) {
  var data = require('./data.json');

  data.push({
    "Name": "Perparim Zhitia",
    "Email": "pepe@laurea.fi",
    "Date": "2023-10-10",
    "Company": "Laurea",
  });
  var json = JSON.stringify(data);
  fs.writeFile('data.json', json, 'utf8', (err) => {
    if (err) throw err;
    console.log('Saved');      
    
});
     res.send('Saved the data in a file. Browse to /details to see the contents of the file');
});

app.get('/adduser', function (req, res) {
  res.sendFile(__dirname + '/adduser.html');
});

app.post('/adduser', function (req, res) {
    
    var data = require('./data.json');
  
    data.push({
    "Name": req.body.name,
    "Email": req.body.email,
    "Date": new Date(),
    "Company": req.body.company,
  });
    var json = JSON.stringify(data);

    fs.writeFile('data.json', json, 'utf8', (err) => {
        if (err) throw err;
        console.log('Saved');
});    
        res.send('Saved the data in a file. Browse to /details to see the contents of the file');
});

app.use(function (req, res) {
  res.status(404).send('Cant find the requested page');
});

app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});