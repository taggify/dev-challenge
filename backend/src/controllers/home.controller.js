/**
 * Home controller functions.
 *
 * All functions related to the route must be declared here.
 *
 * @file Controller functions.
 * @author Alejandro Amaral <aamaral@taggify.net>
 * @since 1.0.0
*/

const homeService = require('../services/home.service');

// JSDoc documentation sample
// JSDoc specification https://jsdoc.app/index.html
/**
    * @name get/home
    * Dummy controller to hello back the user
    * @async
    * @function
    * @inner
    * @memberof module:controllers/home.controller
    * @param {Object} req - Express request Object
    * @param {Object} res - Express response Object
    * @param {Object} next - Express next middleware
*/
async function get(req, res, next) {
    try {
        res.json(await homeService.greet('World'));
    } catch (err) {
        console.error(`Error in GET /: ${err.message}`);
        return next(err);
    }
}

/**
async function post(req, res, next) {
    try {
        res.json(await homeService.post(...));
    } catch (err) {
        console.error(`Error in POST /: ${err.message}`);
        return next(err);
    }
}
*/

module.exports = {
    get
};
