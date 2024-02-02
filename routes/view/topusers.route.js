const express = require('express');
const { User, UserTheme } = require('../../db/models');
const TopUsersPage = require('../../components/TopUsersPage');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const topUsers = await User.findAll({ include: [{ model: UserTheme }], order: [['id', 'ASC']] });
    const topUsersWithScore = topUsers.map((el) => {
      const score = el.dataValues.UserThemes.reduce((acc, elem) => {
        acc += elem.dataValues.score;
        return acc;
      }, 0);
      el.dataValues.userscore = score;
      return el;
    });
    const topUsersFiltered = topUsersWithScore.filter((el) => el.dataValues.userscore !== 0);
    const topUsersSorted = topUsersFiltered.sort((a, b) => b.dataValues.userscore - a.dataValues.userscore);
    const html = res.renderComponent(TopUsersPage, {
      title: 'Top Users',
      topUsers: topUsersSorted,
    });
    res.status(200).send(html);
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;
