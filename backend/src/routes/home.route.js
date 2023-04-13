const express = require('express');
const router = express.Router();

const utils = require('../utils/functions');
const homeController = require('../controllers/home.controller');


module.exports = app => {
    app.use('/', router); // Path to mount the router
};

// Swagger documentation sample
// OpenAPI specification https://swagger.io/specification/
// jsdoc-swagger docs (this) https://brikev.github.io/express-jsdoc-swagger-docs/#/

/**
 * GET /
 * @summary Get a resource
 * @description Welcome to the DSP Backend V2
 * @tags [Home]
 * @return {object} 200 - Returns a greeting message - application/json
 * @example response - 200 - success response
 * {
 *    "message": "Hello World"
 * }
 *
 * @return {object} 401 - Returns an empty object - application/json
 * @example response - 401 - error response
 * {
 * }
 */
router.get('/', homeController.get);

/**
 * POST /
 * @summary Create a resource
 * @description Welcome to the DSP Backend V2
 * @tags [Home]
 * @return {object} 200 - Returns a greeting message - application/json
 * @example response - 200 - success response
 * {
 *    "message": "Hello World"
 * }
 *
 * @return {object} 401 - Returns an empty object - application/json
 * @example response - 401 - error response
 * {
 * }
 */
router.post('/', homeController.get);

/**
 * PUT /
 * @summary Edit a resource
 * @description Welcome to the DSP Backend V2
 * @tags [Home]
 * @return {object} 200 - Returns a greeting message - application/json
 * @example response - 200 - success response
 * {
 *    "message": "Hello World"
 * }
 *
 * @return {object} 401 - Returns an empty object - application/json
 * @example response - 401 - error response
 * {
 * }
 */
router.put('/', homeController.get);

/**
 * PATCH /
 * @summary Edit a resource
 * @description Welcome to the DSP Backend V2
 * @tags [Home]
 * @return {object} 200 - Returns a greeting message - application/json
 * @example response - 200 - success response
 * {
 *    "message": "Hello World"
 * }
 *
 * @return {object} 401 - Returns an empty object - application/json
 * @example response - 401 - error response
 * {
 * }
 */
router.patch('/', homeController.get);

/**
 * DELETE /
 * @summary Delete a resource
 * @description Welcome to the DSP Backend V2
 * @tags [Home]
 * @return {object} 200 - Returns a greeting message - application/json
 * @example response - 200 - success response
 * {
 *    "message": "Hello World"
 * }
 *
 * @return {object} 401 - Returns an empty object - application/json
 * @example response - 401 - error response
 * {
 * }
 */
router.delete('/', homeController.get);
