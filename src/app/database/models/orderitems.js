'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderItems.belongsTo(models.Orders, {
        foreignKey: 'order_id',
        onDelete: 'RESTRICT'
      });

      OrderItems.belongsTo(models.Menus, {
        foreignKey: 'menu_item_id',
        onDelete: 'RESTRICT'
      })
    }
  }
  OrderItems.init({
    order_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    menu_item_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    quantity: { 
      type: DataTypes.INTEGER, 
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'OrderItems',
  });
  return OrderItems;
};