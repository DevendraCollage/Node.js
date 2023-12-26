//* We Can now use the nodemon module for getting output automatically.
//* This will be useful when we make changes to our code and want to see if it works without having to manually restart the server each time
//? 1) Install it using npm install --save-dev nodemon -g (Globally)
//? 2) You can use to nodemon index.js file name to not run every time when you changes to the file

const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.green.inverse("Hello, world!"));

const EmailValidator = validator.isEmail("dev@dev.in");
console.log(
  EmailValidator
    ? chalk.green.inverse(EmailValidator)
    : chalk.red.inverse(EmailValidator)
);
