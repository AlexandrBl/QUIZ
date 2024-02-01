const express = require('express');

const router = express.Router();

const Registration = require('../../components/Registration');

router.get('/', async (req, res) => {
  try {
    const html = res.renderComponent(Registration, { title: 'Регистрация' });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
    console.log(message, '------------------------');
  }
});

module.exports = router;
