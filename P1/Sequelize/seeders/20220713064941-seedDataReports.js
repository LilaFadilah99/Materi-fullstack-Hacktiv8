'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let reports = require('../data/reports.json')
    reports = reports.map(report => {
      report.createdAt = new Date()
      report.updatedAt = new Date()
      return report
    })
   await queryInterface.bulkInsert('Reports', reports, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Reports', null, {})
  }
};
