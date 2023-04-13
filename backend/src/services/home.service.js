/**
 * Home service functions.
 *
 * All business logic related to the service must be declared here.
 *
 * @file Service functions.
 * @author Alejandro Amaral <aamaral@taggify.net>
 * @since 1.0.0
*/

const utils = require('../utils/functions');

// JSDoc documentation sample
// JSDoc specification https://jsdoc.app/index.html
/**
    * @name greet
    * Dummy service function to hello back the user
    * @function
    * @inner
    * @memberof module:controllers/home.controller
    * @param {String} name - The name to hello back
    * @return {String} The hello message
*/
function greet(name) {
    return utils.helloBack(name);
}

module.exports = {
    greet
};
