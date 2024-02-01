const express = require('express');

const router = express.Router();

const { Answer } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    const answer = await Answer.findOne({ where: { id } });

    if (answer.isRight) {
      res.json({ message: 'Правильно' });
    } else {
      res.json({ message: 'Не правильно' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
