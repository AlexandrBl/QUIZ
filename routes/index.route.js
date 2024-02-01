const router = require('express').Router();
const mainRouter = require('./view/main.route');
const registrationRouter = require('./view/registration.route');
const registrationApiRouter = require('./api/registrationApi.route');
const themesRouter = require('./view/themes.route');
const themesApiRouter = require('./api/themesApi.route');

router.use('/', mainRouter);
router.use('/registration', registrationRouter);
router.use('/api/registration', registrationApiRouter);
router.use('/themes', themesRouter);
router.use('/api/themes', themesApiRouter);

module.exports = router;
