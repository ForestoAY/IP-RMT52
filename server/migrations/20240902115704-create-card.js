"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      frameType: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.TEXT,
      },
      atk: {
        type: Sequelize.INTEGER,
      },
      def: {
        type: Sequelize.INTEGER,
      },
      level: {
        type: Sequelize.INTEGER,
      },
      race: {
        type: Sequelize.STRING,
      },
      attribute: {
        type: Sequelize.STRING,
      },
      image_url: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.FLOAT,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cards");
  },
};
