const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, 'public')));

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index', { name: 'Fernando'});
});

app.get('/beers', (req, res) => {
  res.render('beers');
  punkAPI
    .getBeers()
    .then(beersFromApi => console.log('Beers from the database: ', beersFromApi))
    .catch(error => console.log(error));
});

app.get('/random-beer', (req, res) => {
  punkAPI
   .getRandom()
   .then(responseFromAPI => {
    // your magic happens here
   })
   .catch(error => console.log(error));
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));