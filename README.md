# codigo-postal-cli

[![npm version](https://img.shields.io/npm/v/codigo-postal-cli.svg)](https://www.npmjs.com/package/codigo-postal-cli)
[![npm downloads](https://img.shields.io/npm/dm/codigo-postal-cli.svg)](https://www.npmjs.com/package/codigo-postal-cli)
[![Build Status](https://img.shields.io/travis/lgaticaq/codigo-postal-cli.svg)](https://travis-ci.org/lgaticaq/codigo-postal-cli)
[![Coverage Status](https://img.shields.io/coveralls/lgaticaq/codigo-postal-cli/master.svg)](https://coveralls.io/github/lgaticaq/codigo-postal-cli?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/b74ea9471991e49c144c/maintainability)](https://codeclimate.com/github/lgaticaq/codigo-postal-cli/maintainability)
[![dependency Status](https://img.shields.io/david/lgaticaq/codigo-postal-cli.svg)](https://david-dm.org/lgaticaq/codigo-postal-cli#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/lgaticaq/codigo-postal-cli.svg)](https://david-dm.org/lgaticaq/codigo-postal-cli#info=devDependencies)

> Get postal code from Correos de Chile CLI

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
codigo-postal -a "avenida siempre viva" -n 742 -c springfield -x
```

## Licencia

[MIT](https://tldrlegal.com/license/mit-license)
