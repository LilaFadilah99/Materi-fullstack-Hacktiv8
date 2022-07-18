'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const medicalRecords = require('./medicalRecords.json')
    medicalRecords.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return queryInterface.bulkInsert('MedicalRecords', medicalRecords, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MedicalRecords', null, {});
  }
};
