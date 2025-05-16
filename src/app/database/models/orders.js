'use strict';
const {
  Model
} = require('sequelize');
const OrderStatus = require('../../../utils/OrderStatus')
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.belongsTo(models.Customers, {
        foreignKey: 'customer_id',
        onDelete: 'RESTRICT'
      })
    }
  }
  Orders.init({
    customer_id: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: { 
      type: DataTypes.ENUM(OrderStatus),
      allowNull: false },
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};