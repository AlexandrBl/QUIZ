/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Questions', [
      {
        question_text: '1 question of 1 theme',
        theme_id: 1,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: '2 question of 1 theme',
        theme_id: 1,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: '1 question of 2 theme',
        theme_id: 2,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question_text: '2 question of 2 theme',
        theme_id: 2,
        img_path: '/images/placeholder.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
