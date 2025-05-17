'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Menus', 
      [
        {
          name: "Menu_Test",
          description: "Test description",
          price: 1625,
          category: "main_course",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Menu_Test2",
          description: "Test description",
          price: 1525,
          category: "main_course",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Menu_Test3",
          description: "Test description",
          price: 1890,
          category: "main_course",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
