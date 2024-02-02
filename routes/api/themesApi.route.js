const express = require('express');

const router = express.Router();

const { Answer } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    if (id === '') {
      res.json({ message: 'Необходимо выбрать' });
    } else {
      const answer = await Answer.findOne({ where: { id } });
      if (answer.isRight) {
        res.app.locals.user.score += 5;
        const scoreToRender = res.app.locals.user.score;
        res.json({ message: 'Правильно', scoreToRender });
      } else {
        res.app.locals.user.score -= 2;
        const scoreToRender = res.app.locals.user.score;
        res.json({ message: 'Не правильно', scoreToRender });
      }
    }
  } catch ({ message }) {
    const scoreToRender = res.app.locals.user.score;
    res.json({ message, scoreToRender });
  }
});

module.exports = router;
