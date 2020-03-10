module.exports = (Sequelize, sequelize) => {
  return sequelize.define('country', {
    id:{
      type: Sequelize.STRING(3),
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(52)
    },
    continent: {
      type: Sequelize.STRING(45),
      defaultValue: "Asia"
    },
    region: {
      type: Sequelize.STRING(26)
    },
    surfacearea: {
      type: Sequelize.DECIMAL(10,2),
      defaultValue: 0.00
    },
    indepyear: {
      type: Sequelize.INTEGER
    },
    population: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    lifeexpectancy: {
      type: Sequelize.DECIMAL(3,1),
    },
    gnp: {
      type: Sequelize.DECIMAL(10,2),
    },
    gnpoid: {
      type: Sequelize.DECIMAL(10,2),
    },
    localname: {
      type: Sequelize.STRING(45)
    },
    governmentform:{
      type: Sequelize.STRING(45)
    },
    headofstate:{
      type: Sequelize.STRING(60)
    },
    capital: {
      type: Sequelize.INTEGER
    },
    code2: {
      type: Sequelize.STRING(2)
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
};
