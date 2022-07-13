'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Report.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    nik: DataTypes.STRING,
    event: DataTypes.STRING,
    description: DataTypes.TEXT,
    photo: DataTypes.STRING,
    doe: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};