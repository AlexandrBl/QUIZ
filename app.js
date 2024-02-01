require('@babel/register');

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const indexRouter = require('./routes/index.route');
const ssr = require('./middleware/render');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));
app.use(ssr);

app.use('/', indexRouter);

app.listen(PORT, () => console.log('Server started'));
