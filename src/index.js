#!/usr/bin/env node

'use strict'

const program = require('./command')
const pkg = require('../package.json')
const updateNotifier = require('update-notifier')
const chalk = require('chalk')

updateNotifier({ pkg }).notify()

program(process.argv)
  .then(data => {
    console.log(chalk.green(data)) // eslint-disable-line
  })
  .catch(err => {
    console.log(chalk.red(err.message)) // eslint-disable-line
  })
