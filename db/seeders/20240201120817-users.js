/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Default1',
        nickname: 'Defaultuser1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Default2',
        nickname: 'Defaultuser2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Default3',
        nickname: 'Defaultuser3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
