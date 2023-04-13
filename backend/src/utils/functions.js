/**
 * Global auxiliary functions.
 *
 * All functions to be used in the project must be declared here.
 *
 * @file Auxiliary functions.
 * @author Alejandro Amaral <aamaral@taggify.net>
 * @since 1.0.0
*/


// JSDoc documentation sample
// JSDoc specification https://jsdoc.app/index.html
/**
  * @name get/home
  * Dummy function to hello back the user
  * @function
  * @param {String} name The name to hello back
  * @return {Object} The hello message or empty object if the name is empty
  **/
function helloBack(name) {
    if (name) {
        return { message: `Hello ${name}` };
    } else {
        return {};
    }
}

module.exports = {
    helloBack
};
