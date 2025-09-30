const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Nothing here to see');
  } else if (url === '/frontpage') {
    fs.readFile(path.join(__dirname, 'frontpage.html'), 'utf8', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading frontpage.html');
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
      }
    });
  } else if (url === '/contact') {
    fs.readFile(path.join(__dirname, 'contact.html'), 'utf8', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading contact.html');
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
      }
    });
  } else if (url === '/plaintext') {
    fs.readFile(path.join(__dirname, 'sample.txt'), 'utf8', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error loading sample.txt');
      } else {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(data);
      }
    });
  } else if (url === '/json') {
    fs.readFile(path.join(__dirname, 'sampledata.json'), 'utf8', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({ error: 'Error loading sampledata.json' }));
      } else {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(data);
      }
    });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('404 - Nothing here to see');
  }
});

server.listen(8081, () => {
  console.log('Server with routes is running at http://127.0.0.1:8081/');
});