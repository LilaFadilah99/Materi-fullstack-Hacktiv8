'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicalRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // MedicalRecord.belongsTo(models.Patient, {foreignKey: 'PatientId'})
      // MedicalRecord.belongsTo(models.Doctor, {foreignKey: 'DoctorId'})
    }
  };
  MedicalRecord.init({
    diagnosis: DataTypes.STRING,
    treatment: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    PatientId: DataTypes.INTEGER,
    DoctorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MedicalRecord',
  });
  return MedicalRecord;
};