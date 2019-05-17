'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    IMG_URL: '"http://120.79.235.74:9988"',
    SOCKETIO: '"http://120.79.235.74:9988/"'
});
