const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/guestbook', (req, res) => {
  res.send('Guestbook page');
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