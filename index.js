const Sequelize = require('sequelize');
const db = require('./models')(Sequelize);
const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', async (req, res) => {
  const countriesCount = await db.country.count();
  const citiesCount = await db.city.count();
  await res.render('index', { countriesCount: countriesCount, citiesCount: citiesCount });
});

app.get('/countries.html', async (req, res) => {
  const countries = await db.country.findAll({raw: true, limit: 25});
  await res.render('countries', { countries: countries});
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
