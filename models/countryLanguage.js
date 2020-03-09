module.exports = (Sequelize, sequelize) => {
  return sequelize.define('countryLanguage', {
    countrycode:{
      type: Sequelize.STRING(3),
      primaryKey: true
    },
    language: {
      type: Sequelize.STRING(30),
      primaryKey: true
    },
    isofficial: {
      type: Sequelize.STRING(20),
      defaultValue: "F"
    },
    percentage: {
      type: Sequelize.DECIMAL(4,1),
      defaultValue: 0.0
    }
  }, {
    freezeTableName: true
  });
};
