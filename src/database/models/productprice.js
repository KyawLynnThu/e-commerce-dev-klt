'use strict';
const { Model, DATE } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductPrice.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product',
      });
    }
  }
  ProductPrice.init(
    {
      productId: DataTypes.INTEGER,
      regularPrice: DataTypes.INTEGER,
      salePrice: DataTypes.INTEGER,
      discountType: DataTypes.ENUM('PERCENT', 'FLAT'),
      discountValue: DataTypes.INTEGER,
      discountStartDate: DataTypes.DATE,
      discountEndDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'ProductPrice',
    },
  );
  return ProductPrice;
};
