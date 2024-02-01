const router = require('express').Router();
const mainRouter = require('./view/main.route');
const registrationRouter = require('./view/registration.route');

router.use('/', mainRouter);
router.use('/registration', registrationRouter);

module.exports = router;
