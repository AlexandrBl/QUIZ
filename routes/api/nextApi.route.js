const express = require('express');
const {
  Question, Answer, UserTheme, User,
} = require('../../db/models');
const QuestionCard = require('../../components/QuestionCard');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    let { index, theme } = req.body;
    index = +index;
    theme = +theme;
    const questions = await Question.findAll({ where: { theme_id: theme }, order: [['id', 'ASC']] });
    const nextQuestion = questions[index + 1];
    if (nextQuestion) {
      const answers = await Answer.findAll({ where: { question_id: nextQuestion.id } });
      const html = res.renderComponent(QuestionCard, {
        question: nextQuestion,
        answers,
        index: index + 1,
      }, { doctype: false });
      res.status(200).json({ html, message: 'ok' });
    } else {
      const { nickname } = res.app.locals.user;
      const user = await User.findOne({ where: { nickname } });
      const scoreToDB = res.app.locals.user.score;
      const result = await UserTheme.create({ user_id: user.id, theme_id: theme, score: scoreToDB });
      res.status(300).json({ message: 'redirect' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Кажется что-то сломалось :(' });
  }
});

module.exports = router;
