const express = require('express');
const express = require('express');
const app = express();
require('./src/configs/express')(app);
const glob = require('glob');

const dotenv = require('dotenv');
dotenv.config();

let routes = glob.sync('./src/routes/*.js');
routes.forEach(routePath => {
    const route = require(routePath);
    app.use('/', route);
});

module.exports = {
    app,
};
