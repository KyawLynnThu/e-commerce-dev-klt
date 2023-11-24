'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductBulkPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductBulkPrice.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product',
      })
    }
  }
  ProductBulkPrice.init(
    {
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      bulkDiscountType: DataTypes.ENUM('PERCENT', 'FLAT'),
      bulkDiscountValue: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ProductBulkPrice',
    },
  );
  return ProductBulkPrice;
};
