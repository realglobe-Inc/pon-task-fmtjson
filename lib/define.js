/**
 * Define task
 * @function define
 * @param {string|string[]} patterns - Target filename patterns
 * @param {Object} [options={}] - Optional settings
 * @param {boolean} [options.sort] - Should sort params
 * @param {number} [options.indent=2] - JSON indent
 * @returns {function} Defined task
 */
'use strict'

const co = require('co')
const fmtjson = require('fmtjson')

/** @lends define */
function define (patterns, options = {}) {
  function task (ctx) {
    const { logger } = ctx
    return co(function * () {
      let results = yield fmtjson(patterns, options)
      for (let filename of Object.keys(results)) {
        let { changed } = results[ filename ]
        if (changed) {
          logger.debug(`File formatted: ${filename}`)
        }
      }
    })
  }

  return Object.assign(task,
    // Define sub tasks here
    {}
  )
}

module.exports = define


