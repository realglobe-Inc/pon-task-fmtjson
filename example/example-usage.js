'use strict'

const pon = require('pon')
const fmtjson = require('pon-task-fmtjson')

async function tryExample () {
  let run = pon({
    'format:json': fmtjson([ 'src/**/*.json' ], {
      sort: true,
      indent: 2
    })
  })

  run('format:*')
}

tryExample()
