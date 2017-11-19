/**
 * Test case for define.
 * Runs with mocha.
 */
'use strict'

const define = require('../lib/define.js')
const ponContext = require('pon-context')
const {ok} = require('assert')

describe('define', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Define', async () => {
    const filename = require.resolve('../misc/mocks/mock-json-01.json')
    const ctx = ponContext()

    const task = define(filename, {
      sort: true
    })
    ok(task)

    await Promise.resolve(task(ctx))
  })
})

/* global describe, before, after, it */
