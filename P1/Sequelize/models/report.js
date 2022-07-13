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
    get formatDate (){ // contoh bisa menambahkan getter pada model sequelize
      let date = new Date(this.dateOfEvent);
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleString('id-ID', options)
    }

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
    dateOfEvent: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};