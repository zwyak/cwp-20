const City = require('./city');
const Country = require('./country');


module.exports = (Sequelize) => {
  const sequelize = new Sequelize('world', 'root', 'root', {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },

    storage: './world'
  });

  const city = City(Sequelize, sequelize);
  const country = Country(Sequelize, sequelize);

  sequelize.sync()
    .then(data =>{
      console.log(data);
      sequelize.query("SELECT * FROM `city`", { type: sequelize.QueryTypes.SELECT }).then(res=>{console.log(res);})
    })

  return {
    city,
    country,

    sequelize: sequelize,
    Sequelize: Sequelize
  };
};
