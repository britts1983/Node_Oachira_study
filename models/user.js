const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db')

const User = sequelize.define('user', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,

  },
  password: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  role: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  status: {
    type: DataTypes.BOOLEAN
    // allowNull defaults to true
  }
},
{
    freezeTableName: true,
  });

// `sequelize.define` also returns the model
console.log(User === sequelize.models.user);

module.exports = User