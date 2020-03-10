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
  let page = 0;
  if (req.query.page) page = req.query.page;
  const offset = page * 25;
  const limit = 25;
  const countriesCount = await db.country.count();
  const totalPageCount = Math.floor((countriesCount + limit - 1) / limit);
  let pages = [];
  for (let i = 0; i < totalPageCount; i++) {
    pages[i] = i;
  }
  const countries = await db.country.findAll({raw: true, limit: limit, offset: offset});
  await res.render('countries', { countries: countries, pages: pages, currentPage: page, offset: offset, count: countries.length});
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
