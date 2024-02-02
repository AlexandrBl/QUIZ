const express = require('express');
const { User } = require('../../db/models');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, nickname } = req.body;
    if (name && nickname) {
      const dbUser = await User.findOne({ where: { nickname } });
      if (dbUser) {
        console.log('User already exists');
        res.json({ message: 'Извините, такой пользователь уже существует' });
      } else {
        const user = await User.create({ name, nickname });
        res.app.locals.user = user;
        res.app.locals.user.score = '';
        console.log(res.app.locals.user.score, '1212121212');
        res.json({ message: 'ok' });
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    console.log(message);
    res.json({ message });
  }
});

module.exports = router;
