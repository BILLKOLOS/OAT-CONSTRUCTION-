const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio', { title: 'Projects' });
});

app.get('/services', (req, res) => {
  res.render('services', { title: 'Services' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});