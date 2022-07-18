'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const patients = require('./patients.json')
    patients.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return queryInterface.bulkInsert('Patients', patients, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Patients', null, {});
  }
};
