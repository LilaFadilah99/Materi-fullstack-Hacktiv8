'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('MedicalRecords', 'PatientId', {
      type: Sequelize.INTEGER,
      // kita perlu kasih tau sequelize ini adalah ForeignKey
      // kasih tau table refrences nya kmn dan columnya apa
      references: {
        model: 'Patients',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('MedicalRecords', 'PatientId');
  }
};
