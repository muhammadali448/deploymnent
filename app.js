const express = require('express');
const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});


app.listen(port, () => {
  console.log(`Server started on port`);
});