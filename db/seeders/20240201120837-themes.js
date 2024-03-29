/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Themes', [
      {
        name: 'Собеседование в Эльбрус',
        img_path: '/images/el.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'География',
        img_path: '/images/geo.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
