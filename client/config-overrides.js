const Dotenv = require('dotenv-webpack');
// config-overrides.js
module.exports = function override(config, env) {
    config.plugins.push(new Dotenv());
    return config;
}