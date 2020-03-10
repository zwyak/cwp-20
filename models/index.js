const City = require('./city');
const Country = require('./country');


module.exports = (Sequelize) => {
  const sequelize = new Sequelize('world', 'root', 'root', {
    username: 'root',
    password: null,
    database: 'world',
    host: '127.0.0.1',
    dialect: 'sqlite',
    dialectOptions: {
      multipleStatements: true
    },
    logging: console.log,
    storage: './models/world.db',
    operatorsAliases: Sequelize.Op
  });

  const city = City(Sequelize, sequelize);
  const country = Country(Sequelize, sequelize);

  sequelize.sync()
    .then(data =>{
      console.log(data);
    });

  return {
    city,
    country,

    sequelize: sequelize,
    Sequelize: Sequelize
  };
};
