'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      imgUrl: {
        type: Sequelize.STRING
      },
      CategoryId: {
         type: Sequelize.INTEGER, 
         type: Sequelize.INTEGER,
         references: {
              model: "Categories"
           }, 
          onDelete:"CASCADE", 
          onUpdate:"CASCADE",
       },
      UserId: {
        type: Sequelize.INTEGER, 
        type: Sequelize.INTEGER,
        references: {
             model: "Users"
          }, 
         onDelete:"CASCADE", 
         onUpdate:"CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};