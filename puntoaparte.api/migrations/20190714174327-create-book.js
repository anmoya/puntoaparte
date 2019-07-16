'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      isbn: {
        type: Sequelize.STRING
      },
      subtitle: {
        type: Sequelize.STRING
      },
      abstract: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      AuthorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Authors",
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Books');
  }
};