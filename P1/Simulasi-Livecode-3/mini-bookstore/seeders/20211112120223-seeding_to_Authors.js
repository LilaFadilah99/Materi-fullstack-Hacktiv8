'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let authors = require('../authors.json');
    await queryInterface.bulkInsert('Authors', authors.map(author => {
      author.createdAt = new Date();
      author.updatedAt = new Date();
      return author;
    }), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
