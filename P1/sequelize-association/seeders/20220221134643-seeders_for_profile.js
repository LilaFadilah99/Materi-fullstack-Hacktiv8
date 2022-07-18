'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const profiles = require('./profiles.json')
    profiles.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return queryInterface.bulkInsert('Profiles', profiles, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profiles', null, {});
  }
};
