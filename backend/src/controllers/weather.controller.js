/**
 * Controller functions related to weather data.
 *
 * All functions related to weather data processing and retrieval must be declared here.
 *
 * @file Controller functions for weather data.
 * @author [Emanuel Acosta]
 * @since 1.0.0
*/

const weatherService = require('../services/wheather.service');
const databaseService = require('../services/database.service');

/**
 * Save weather data for a specified city.
 *
 * @async
 * @function saveData
 * @memberof module:controllers/weather.controller
 * @param {Object} req - Express request object containing the city in the request body
 * @param {Object} res - Express response object to send the weather data
 * @returns {Object} - Saved weather data
 * @throws {Error} - If invalid weather data is received from the API or if the city is not found
 */
async function saveData(req, res) {
    try {
        const city = req.body.city;

        if (!city) {
            if (res) {
                res.status(400).json({ message: 'City not specified' });
            }
            return;
        }

        const weatherData = await weatherService.getWeatherData(city);

        if (!weatherData || !weatherData.main || !weatherData.weather || !weatherData.weather[0]) {
            if (res) {
                res.status(400).json({ message: 'Invalid weather data received from API' });
            }
            return;
        }

        const savedWeather = await databaseService.saveWeatherData(weatherData);
        
        console.log('Data saved in the database:', JSON.stringify(savedWeather, null, 2));

        if (res) { 
            res.json(savedWeather);
        }

    } catch (error) {
        console.error('Error retrieving weather data:', error);
        if (res) {  // Verifica si se proporciona un objeto de respuesta
            if (error.message === 'City not found') {
                res.status(404).json({ message: 'City not found' });
            } else {
                res.status(500).json({ message: 'Internal server error' });
            }
        }
    }
};

/**
 * Get recent weather data.
 *
 * @async
 * @function getRecentWeatherData
 * @memberof module:controllers/weather.controller
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object to send the recent weather data
 * @returns {Object} - Recent weather data
 * @throws {Error} - If there is an error while retrieving recent weather data
 */
async function getRecentWeatherData(req, res) {
    try {
        const recentWeatherData = await databaseService.getRecentWeatherData();
        res.json(recentWeatherData);
    } catch (error) {
        console.error('Error retrieving weather data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    saveData,
    getRecentWeatherData
};
