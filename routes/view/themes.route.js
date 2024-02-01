const express = require('express');

const router = express.Router();
const { Theme, Question } = require('../../db/models');

const ThemePage = require('../../components/ThemePage');

router.get('/', async (req, res) => {
  console.log(req);
  try {
    const theme = await Theme.findAll();
    console.log(res.app.locals.user);
    const html = res.renderComponent(ThemePage, { theme, title: 'Выбор темы' });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

router.get('/:id/questions/game', async (req, res) => {
  try {
    const { id } = req.params;
    const questions = Question.findAll({ where: theme_id = id });
  } catch ({ message }) {
    console.log(message);
  }
});

module.exports = router;
