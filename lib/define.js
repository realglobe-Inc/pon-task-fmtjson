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

const fmtjson = require('fmtjson')

/** @lends define */
function define (patterns, options = {}) {
  async function task (ctx) {
    const {logger} = ctx
    const results = await fmtjson(patterns, options)
    for (const filename of Object.keys(results)) {
      const {changed} = results[filename]
      if (changed) {
        logger.debug(`File formatted: ${filename}`)
      }
    }
  }

  return Object.assign(task,
    // Define sub tasks here
    {}
  )
}

module.exports = define


