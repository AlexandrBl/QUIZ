const express = require('express');

const router = express.Router();

const RegistrationPage = require('../../components/RegistrationPage');

router.get('/', async (req, res) => {
  try {
    const html = res.renderComponent(RegistrationPage, { title: 'Регистрация' });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
