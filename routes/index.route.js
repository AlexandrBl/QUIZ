const router = require('express').Router();
const mainRouter = require('./view/main.route');
const registrationRouter = require('./view/registration.route');
const themesRouter = require('./view/themes.route');

router.use('/', mainRouter);
router.use('/registration', registrationRouter);
router.use('/themes', themesRouter);

module.exports = router;
