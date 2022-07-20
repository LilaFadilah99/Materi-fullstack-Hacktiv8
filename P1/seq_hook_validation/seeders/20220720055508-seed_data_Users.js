'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let users = require('./users.json');
    users = users.map(user => {
      user.createdAt = new Date();
      user.updatedAt = new Date();
      return user;
    })

    await queryInterface.bulkInsert('Users', users, {});
    await queryInterface.sequelize.query(`SELECT setval('"Users_id_seq"', (SELECT MAX(id) FROM "Users"))`);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
