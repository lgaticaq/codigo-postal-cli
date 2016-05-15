#!/usr/bin/env node

'use strict';

const program = require('commander');
const codigoPostal = require('codigo-postal');
const ncp = require('copy-paste');
const pkg = require('../package.json');
const updateNotifier = require('update-notifier');
const chalk = require('chalk');

updateNotifier({pkg}).notify();

program
  .version(pkg.version)
  .usage('-a <calle> -n <numero> -c <comuna>')
  .description('CLI para obtener el Código Postal')
  .option('-a, --calle [calle]', 'Agregar calle')
  .option('-n, --numero [numero]', 'Agregar numero')
  .option('-c, --comuna [comuna]', 'Agregar comuna')
  .option('-x, --copy', 'Copiar al portapapeles')
  .parse(process.argv);

if (program.calle && program.numero && program.comuna) {
  const data = {
    address: program.calle,
    number: program.numero,
    commune: program.comuna
  };
  codigoPostal(data).then(result => {
    console.log(chalk.green(`Código Postal: ${result.zip}`));
    console.log(chalk.green(`Calle: ${result.address}`));
    console.log(chalk.green(`Número: ${result.number}`));
    console.log(chalk.green(`Comuna: ${result.commune}`));
    if (program.copy) {
      ncp.copy(result.zip.toString());
      process.exit(0);
    }
  }).catch(() => console.log(chalk.red('Código Postal no encontrado')));
} else {
  program.help();
}
