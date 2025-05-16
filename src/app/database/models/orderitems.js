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
      // define association here
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