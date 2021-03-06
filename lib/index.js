/**
 * Pon task to format json files
 * @module pon-task-fmtjson
 * @version 2.0.3
 */

'use strict'

const define = require('./define')

let lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
