/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Answers', [
      {
        answer_text: 'SomeAnswer1',
        question_id: 1,
        isRight: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer_text: 'SomeAnswer2',
        question_id: 1,
        isRight: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer_text: 'SomeAnswer3',
        question_id: 1,
        isRight: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer_text: 'SomeAnswer1',
        question_id: 2,
        isRight: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer_text: 'SomeAnswer2',
        question_id: 2,
        isRight: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer_text: 'SomeAnswer3',
        question_id: 2,
        isRight: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer_text: 'SomeAnswer1',
        question_id: 3,
        isRight: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer_text: 'SomeAnswer2',
        question_id: 3,
        isRight: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer_text: 'SomeAnswer3',
        question_id: 3,
        isRight: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer_text: 'SomeAnswer1',
        question_id: 4,
        isRight: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer_text: 'SomeAnswer2',
        question_id: 4,
        isRight: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        answer_text: 'SomeAnswer3',
        question_id: 4,
        isRight: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Answers', null, {});
  },
};
