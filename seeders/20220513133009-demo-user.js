'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
        username: 'Johny Muerto',
        password: 'Muerte',
        email: 'jdep@gmail.com',

      }], {});
      await queryInterface.bulkInsert('users', [{
        username: 'Brayan Arvelo',
        password: 'brayan',
        email: 'barvelo@gmail.com',

      }], {});
      await queryInterface.bulkInsert('users', [{
        username: 'Pere Gil',
        password: 'pere',
        email: 'peregil@gmail.com',

      }], {});
    

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
