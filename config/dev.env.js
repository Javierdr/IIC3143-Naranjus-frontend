'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_FRONTEND: '"http://localhost:8080"',
  VUE_APP_BACKEND: '"http://localhost:8000"',

})
