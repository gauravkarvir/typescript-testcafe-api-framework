#!/usr/bin/env node
const { promisify } = require('util');
const { exec } = require('child_process');
const execute = promisify(exec);
const chalk = require('chalk');

console.log(chalk.blueBright('Checking types: 🤔'));

const handleSuccess = ({stdout}) => {
  console.log(chalk.green('Clean check 🦁'));
};

const handleError = ({stdout}) => {
  console.log(stdout);
  console.log(chalk.redBright('Errors were found 😱'))
  process.exit(1);
};

execute(`${__dirname}/node_modules/.bin/tsc --noEmit`)
  .then(handleSuccess)
  .catch(handleError);

