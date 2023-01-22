const path = require('path');
const express = require('express');
const AppError = require('./utils/appError');
const userRouter = require('./routes/userRoutes');

const app = express();

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

// Routes Mounting

app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.url} on this server!`));
});

// 4 -  Start Sever
module.exports = app;
