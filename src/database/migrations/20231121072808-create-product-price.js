'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductPrices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      regularPrice: {
        type: Sequelize.INTEGER,
      },
      salePrice: {
        type: Sequelize.INTEGER
      },
      discountType: {
        type: Sequelize.ENUM,
        values: ['PERCENT', 'FLAT'],
        allowNull: true,
      },
      discountValue: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      discountStartDate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      discountEndDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('ProductPrices');
  },
};
