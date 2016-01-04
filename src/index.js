#!/usr/bin/env node

'use strict';

import program from 'commander';
import codigoPostal from 'codigo-postal';
import pkg from '../package.json';

program
  .version(pkg.version)
  .description('CLI para obtener el Código Postal')
  .option('-a, --calle [calle]', 'Agregar calle')
  .option('-n, --numero [numero]', 'Agregar numero')
  .option('-c, --comuna [comuna]', 'Agregar comuna')
  .parse(process.argv);

if (program.calle && program.numero && program.comuna) {
  const data = {
    address: program.calle,
    number: program.numero,
    commune: program.comuna
  };
  codigoPostal(data).then((result) => {
    console.log(`Código Postal: ${result.zip}`);
    console.log(`Calle: ${result.address}`);
    console.log(`Número: ${result.number}`);
    console.log(`Comuna: ${result.commune}`);
  }).catch(() => console.log('Código Postal no encontrado'));
} else {
  program.help();
}
