const express = require('express');

const router = express.Router();
const { Theme, Question, Answer } = require('../../db/models');

const ThemePage = require('../../components/ThemePage');
const QuestionPage = require('../../components/QuestionPage');

router.get('/', async (req, res) => {
  console.log(req);
  try {
    const theme = await Theme.findAll();
    res.app.locals.user.score = '';
    const html = res.renderComponent(ThemePage, { theme, title: 'Выбор темы' });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

router.get('/:id/questions/game', async (req, res) => {
  try {
    const { id } = req.params;
    const questions = await Question.findAll({ where: { theme_id: id }, order: [['id', 'ASC']] });
    const question = questions[0];
    const theme = await Theme.findOne({ where: { id } });
    const answers = await Answer.findAll({ where: { question_id: question.id } });
    res.app.locals.user.score = 0;
    const html = res.renderComponent(QuestionPage, {
      title: theme.name,
      question,
      answers,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    console.log(message);
    res.status(500).send('Кажется что-то случилось :((');
  }
});

module.exports = router;
