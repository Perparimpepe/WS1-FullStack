const express = require('express');
const app = express();
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Directory
app.use(express.urlencoded({ extended: true }));

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
    res.render('newmessage');
});

app.post('/newmessage', (req, res) => {
    const { username, country, message } = req.body;

    if (!username || !country || !message) {
        return res.status(400).send('All fields are required');
    }

    // Read existing messages
    const dataPath = path.join(__dirname, 'data.json');
    const jsonData = fs.existsSync(dataPath) ? JSON.parse(fs.readFileSync(dataPath)) : [];

    const newMsg = {
        id: jsonData.length + 1,
        username,
        country,
        message,
        date: new Date().toISOString().split('T')[0] // YYYY-MM-DD format
    };

    jsonData.push(newMsg);
    fs.writeFileSync(dataPath, JSON.stringify(jsonData, null, 2));

    res.redirect('/guestbook'); // Get back to guest book
});

app.get('/ajaxmessage', (req, res) => {
  res.send('Ajax message page');
});

// Käynnistys
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
