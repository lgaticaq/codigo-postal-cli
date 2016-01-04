# codigo-postal-cli

[![npm version](https://img.shields.io/npm/v/codigo-postal-cli.svg?style=flat-square)](https://www.npmjs.com/package/codigo-postal-cli)
[![npm downloads](https://img.shields.io/npm/dm/codigo-postal-cli.svg?style=flat-square)](https://www.npmjs.com/package/codigo-postal-cli)
[![dependency Status](https://img.shields.io/david/lgaticaq/codigo-postal-cli.svg?style=flat-square)](https://david-dm.org/lgaticaq/codigo-postal-cli#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/lgaticaq/codigo-postal-cli.svg?style=flat-square)](https://david-dm.org/lgaticaq/codigo-postal-cli#info=devDependencies)
[![Join the chat at https://gitter.im/lgaticaq/codigo-postal-cli](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg?style=flat-square)](https://gitter.im/lgaticaq/codigo-postal-cli?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Get postal code from Correos de Chile CLI

## Installation

```bash
npm i -g codigo-postal-cli
```

## Use

```bash
codigo-postal

Usage: codigo-postal -a <calle> -n <numero> -c <comuna>

CLI para obtener el Código Postal

Options:

  -h, --help             output usage information
  -V, --version          output the version number
  -a, --calle [calle]    Agregar calle
  -n, --numero [numero]  Agregar numero
  -c, --comuna [comuna]  Agregar comuna
  -x, --copy             Copiar al portapapeles
```

## Example

```bash
codigo-postal -a "avenida siempre viva" -n 742 -c springfield
```
