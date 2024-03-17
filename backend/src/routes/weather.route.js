const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weather.controller');

/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Endpoints para la gestión de datos meteorológicos
 */

/**
 * POST /weather
 * @summary Save weather data
 * @tags [Weather]
 * @param {object} request.body.city - The city for which weather data is to be saved
 * @return {object} 200 - Weather data saved successfully
 * @example response - 200 - success response
 * {
 *   "id": 203,
 *   "condition": "Clouds",
 *   "description": "few clouds",
 *   "temperature": 10,
 *   "feels_like": 9,
 *   "temp_min": 10,
 *   "temp_max": 12,
 *   "pressure": 1014,
 *   "humidity": 39,
 *   "datetime": "2024-03-17T21:25:31.000Z",
 *   "city": "Bolivar",
 *   "icon": "02d"
 * }
 * @return {object} 404 - City not found
 * @example response - 404 - error response
 * {
 *  "message": "City not found"
 * }
 * @return {object} 400 - Bad Request
 * @example response - 400 - error response
 * {
 *  "message": "City not specified"
 * }
 * @return {object} 500 - Internal server error
 * @example response - 500 - error response
 */
router.post('/weather', async (req, res, next) => {

    try {
        const weatherData = await weatherController.saveData(req, res);

        res.json(weatherData);

    } catch (error) {
        next(error);
    }
});

/**
 * GET /weather
 * @summary Get recent weather data
 * @tags [Weather]
 * @return {object} 200 - Recent weather data retrieved successfully
 * @return {object} 500 - Internal server error
 */
router.get('/weather', weatherController.getRecentWeatherData);

module.exports = router;