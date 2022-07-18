'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('MedicalRecords', 'DoctorId', {
      type: Sequelize.INTEGER,
      // kita perlu kasih tau sequelize ini adalah ForeignKey
      // kasih tau table refrences nya kmn dan columnya apa
      references: {
        model: 'Doctors',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('MedicalRecords', 'DoctorId');
  }
};
