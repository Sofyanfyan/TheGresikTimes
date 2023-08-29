'use strict';

const { hashPassword } = require('../helpers');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const data = [{
      
         username: 'Achmad Sofyan Pratama', 
         email:'fyans@email.com',
         password: hashPassword('123123'), 
         phoneNumber: '0823772332232', 
         address: 'INI ADDRESS',
         role:'admin',
         createdAt: new Date(), 
         updatedAt: new Date()
    }]

    return queryInterface.bulkInsert('Users', data)
  },

   down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Users', null)
  }
};
