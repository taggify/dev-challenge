const express = require('express');
const app = express();
require('./src/configs/express')(app);
const glob = require('glob');

// Load all routes
let routes = glob.sync('./src/routes/*.js');
routes.forEach(route => { require(route)(app); });

module.exports = {
    app,
};
