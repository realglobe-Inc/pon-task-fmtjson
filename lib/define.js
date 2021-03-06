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
const path = require('path')

/** @lends define */
function define (patterns, options = {}) {
  async function task (ctx) {
    const {logger} = ctx
    const results = await fmtjson(patterns, options)
    const formatted = []
    for (const key of Object.keys(results)) {
      const filename = path.relative(process.cwd(), key)
      const {changed} = results[filename]
      if (changed) {
        logger.debug(`File formatted: ${filename}`)
        formatted.push(filename)
      }
    }
    return formatted
  }

  return Object.assign(task,
    // Define sub tasks here
    {}
  )
}

module.exports = define


