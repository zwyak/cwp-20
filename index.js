const Sequelize = require('sequelize');
const db = require('./models')(Sequelize);
const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', async (req, res) => {
  let countriesCount = await db.country.count();
  let citiesCount = await db.city.count();

  await res.render('index', { countriesCount: countriesCount, citiesCount: citiesCount });
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
