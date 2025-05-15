'use strict';
const {
  Model
} = require('sequelize');
const MenuCategories = require('../../../utils/MenuCategories')
module.exports = (sequelize, DataTypes) => {
  class Menus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Menus.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM(MenuCategories),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Menus',
  });
  return Menus;
};