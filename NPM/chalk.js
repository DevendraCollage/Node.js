const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.green.inverse("Hello, world!"));

const EmailValidator = validator.isEmail("dev@dev.in");
console.log(
  EmailValidator
    ? chalk.green.inverse(EmailValidator)
    : chalk.red.inverse(EmailValidator)
);
