const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});


app.listen(5000, () => {
  console.log(`Server started on port`);
});