module.exports = (Sequelize, sequelize) => {
  return sequelize.define('country', {
    code:{
      type: Sequelize.STRING(3),
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(52)
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
