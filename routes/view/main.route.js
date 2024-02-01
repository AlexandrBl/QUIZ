const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.redirect('/registration');
  } catch ({ message }) {
    console.log(message, '------------------------');
  }
});

module.exports = router;
