'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const customer = await queryInterface.sequelize.query(`SELECT id from public."Customers";`);

    queryInterface.bulkInsert('Orders', 
      [
        {
          customer_id: customer[0][0].id,
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
          
        },
        {
          customer_id: customer[0][0].id,
          status: 'preparing',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
