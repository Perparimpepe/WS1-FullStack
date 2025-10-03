const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/guestbook', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error loading guestbook data');
      return;
    }
    const messages = JSON.parse(data);
    let html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Guestbook</title>
      </head>
      <body>
        <h1 class="m-3">Guestbook</h1>
        <table class="table table-striped m-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Country</th>
              <th>Date</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
    `;
    messages.forEach(msg => {
      html += `
        <tr>
          <td>${msg.id}</td>
          <td>${msg.username}</td>
          <td>${msg.country}</td>
          <td>${msg.date}</td>
          <td>${msg.message}</td>
        </tr>
      `;
    });
    html += `
          </tbody>
        </table>
      </body>
      </html>
    `;
    res.send(html);
  });
});

app.get('/newmessage', (req, res) => {
  res.send('New message page');
});

app.get('/ajaxmessage', (req, res) => {
  res.send('Ajax message page');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});