'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Customers', 
      [
        {
          name : "Random",
          email : "Random@test.com",
          phone : "14997654812",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};
