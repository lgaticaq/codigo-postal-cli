'use strict'

const { expect } = require('chai')
const { exec } = require('child_process')
const proxyquire = require('proxyquire')

const codigoPostalStub = data => {
  return new Promise((resolve, reject) => {
    if (data.address === 'exposicion') {
      resolve({
        zip: 9160002,
        address: 'EXPOSICION',
        number: 51,
        commune: 'ESTACION CENTRAL'
      })
    } else {
      reject(new Error('Not found'))
    }
  })
}

const command = proxyquire('../src/command.js', {
  'codigo-postal': codigoPostalStub
})

describe('codigo-postal', () => {
  describe('valid', () => {
    it('found', done => {
      const args = [
        'node',
        'index.js',
        '-a',
        'exposicion',
        '-n',
        '51',
        '-c',
        'estacion central'
      ]
      command(args).then(data => {
        expect(data).eql(
          'Código Postal: 9160002\n' +
            'Calle: EXPOSICION\n' +
            'Número: 51\n' +
            'Comuna: ESTACION CENTRAL'
        )
        done()
      })
    })
  })
  describe('invalid', () => {
    it('not found', done => {
      const args = [
        'node',
        'index.js',
        '-a',
        'not found',
        '-n',
        '404',
        '-c',
        'not found'
      ]
      command(args).catch(err => {
        expect(err.message).eql('Código Postal no encontrado')
        done()
      })
    })
  })
  describe('invalid', () => {
    it('not found', done => {
      exec('node ./src/index.js -h', (err, stdout, stderr) => {
        expect(err).eql(null)
        expect(stdout).to.be.an('string')
        expect(stderr).eql('')
        done()
      })
    })
  })
})
