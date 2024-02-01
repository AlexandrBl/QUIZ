const router = require('express').Router();
const mainRouter = require('./view/main.route');
const registrationRouter = require('./view/registration.route');
const registrationApiRouter = require('./api/registrationApi.route');

router.use('/', mainRouter);
router.use('/registration', registrationRouter);
router.use('/api/registration', registrationApiRouter);

module.exports = router;
