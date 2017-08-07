'use strict'

const program = require('commander')
const codigoPostal = require('codigo-postal')
const clipboardy = require('clipboardy')
const pkg = require('../package.json')

module.exports = args => {
  return new Promise((resolve, reject) => {
    program
      .version(pkg.version)
      .usage('-a <calle> -n <numero> -c <comuna>')
      .description('CLI para obtener el Código Postal')
      .option('-a, --calle [calle]', 'Agregar calle')
      .option('-n, --numero [numero]', 'Agregar numero')
      .option('-c, --comuna [comuna]', 'Agregar comuna')
      .option('-x, --copy', 'Copiar al portapapeles')
      .parse(args)

    if (program.calle && program.numero && program.comuna) {
      const data = {
        address: program.calle,
        number: program.numero,
        commune: program.comuna
      }
      codigoPostal(data)
        .then(result => {
          const message =
            `Código Postal: ${result.zip}\n` +
            `Calle: ${result.address}\n` +
            `Número: ${result.number}\n` +
            `Comuna: ${result.commune}`
          if (!program.copy) return resolve(message)
          clipboardy
            .write(result.zip.toString())
            .then(() => message)
            .catch(() => message)
        })
        .catch(() => {
          reject(new Error('Código Postal no encontrado'))
        })
    } else {
      resolve(program.help())
    }
  })
}
