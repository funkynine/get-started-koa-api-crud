const mongoose = require('mongoose');
const chalk = require('chalk');

const MONGO = {
  URL: 'mongodb+srv://funkynine:1234@cluster0-djwfi.mongodb.net/test?retryWrites=true&w=majority'
};

const dbURL = MONGO.URL;
const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

const option = {
  useFindAndModify: false,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

module.exports = function () {
  mongoose.connect(dbURL, option);

  mongoose.connection.on('connected', () => {
    console.log(connected('Mongoose подключился к БД '));
  });

  mongoose.connection.on('error', (err) => {
    console.log(error(`Mongoose не смогу подключится ошибка: ${err}`));
  });

  mongoose.connection.on('disconnected', () => {
    console.log(disconnected('Mongoose отключился от БД'));
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log(termination('Mongoose отключился из за остановки приложения'));
      process.exit(0);
    });
  });
}