const express = require('express');
const app = express();
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // <-- korjattu
app.use(express.static(path.join(__dirname, 'public'))); // <-- staattiset tiedostot kuten CSS

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/guestbook', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error loading guestbook data');
    }
    const messages = JSON.parse(data);
    res.render('guestbook', { messages });
  });
});

app.get('/newmessage', (req, res) => {
  res.send('New message page');
});

app.get('/ajaxmessage', (req, res) => {
  res.send('Ajax message page');
});

// Käynnistys
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
