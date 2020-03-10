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

app.get('/countries/*.html', async (req, res) => {
  if (!req.query.code) res.sendStatus(401);
  const country = await db.country.findByPk(req.query.code, {raw: true});
  const citiesCount = await db.city.count({where:{countrycode:req.query.code}});
  const cities = await db.city.findAll({raw:true, where:{countrycode:req.query.code}});
  await res.render('country', {country: country, citiesCount: citiesCount, cities: cities});
});

app.get('/cities/*.html', async (req, res) => {
  if (!req.query.ID) res.sendStatus(401);
  const city = await db.city.findByPk(req.query.ID, {raw: true});
  const country = await db.country.findByPk(city.CountryCode, {raw: true});
  console.log(country);
  await res.render('city', {city: city, country: country});
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
