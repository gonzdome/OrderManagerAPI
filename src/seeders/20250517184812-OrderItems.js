'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const order = await queryInterface.sequelize.query(`SELECT id from public."Orders";`);
    const menus = await queryInterface.sequelize.query(`SELECT id from public."Menus";`);

    queryInterface.bulkInsert('OrderItems', 
      [
        {
          order_id: order[0][0].id,
          menu_item_id: menus[0][0].id,
          quantity: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          order_id: order[0][1].id,
          menu_item_id: menus[0][1].id,
          quantity: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('OrderItems', null, {});
  }
};
