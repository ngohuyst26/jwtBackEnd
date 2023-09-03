'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('user', [
      {
      email: 'JohnDoe11',
      password: " ",
      user: "John11"
    },
    {
      email: 'JohnDoe12',
      password: " ",
      user: "John12"
    },
    {
      email: 'JohnDoe13',
      password: " ",
      user: "John13"
    },
    {
      email: 'JohnDoe14',
      password: " ",
      user: "John14"
    },
    {
      email: 'JohnDoe15',
      password: " ",
      user: "John15"
    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
