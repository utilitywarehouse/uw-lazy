#!/usr/bin/env node

var program = require('commander');

program
  .version('0.0.1')
  .command('react <name>', 'generate react component')
  .parse(process.argv);
