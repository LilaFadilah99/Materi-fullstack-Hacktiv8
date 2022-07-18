'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const doctors = require('./doctors.json')
    doctors.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return queryInterface.bulkInsert('Doctors', doctors, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Doctors', null, {});
  }
};
