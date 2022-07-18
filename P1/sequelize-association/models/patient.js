'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Patient.hasOne(models.Profile, {foreignKey: 'PatientId'})
      // Patient.hasMany(models.MedicalRecord, {foreignKey: 'PatientId'})
      Patient.belongsToMany(models.Doctor, {through: models.MedicalRecord, foreignKey: 'PatientId'})
    }
  };
  Patient.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};