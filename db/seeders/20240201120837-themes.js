/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Themes', [
      {
        name: 'Coding',
        img_path: '/images/coding.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Food',
        img_path: '/images/food.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
