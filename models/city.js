module.exports = (Sequelize, sequelize) => {
  return sequelize.define('city', {
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(35)
    },
    countrycode: {
      type: Sequelize.STRING(3)
    },
    district: {
      type: Sequelize.STRING(20)
    },
    info: {
      type: Sequelize.JSON,
      defaultValue: 0
    }
  }, {
    freezeTableName: true,
    timestamps: false
  });
};
