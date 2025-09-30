const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === '/') {
   fs.readFile(path.join(__dirname, 'sample.json'), 'utf8', (err, data) => {
      if (err) {
        response.writeHead(500, { 'Content-Type': 'text/json' });
        response.end(JSON.stringify({ error: 'Error loading sample.json' }));
      } else {
        response.writeHead(200, { 'Content-Type': 'text/json' });
        response.end(data);
      }
    });
  }  else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('404 - Page Not Found');
  }
});

server.listen(8081, () => {
  console.log('Server with routes is running at http://127.0.0.1:8081/');
});