/**
 * Service functions for database operations related to weather data.
 *
 * All business logic related to database operations for weather data must be declared here.
 *
 * @file Service functions for database operations related to weather data.
 * @author [Emanuel Acosta]
 * @since 1.0.0
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const difKelvin = 273.15

/**
 * Save weather data to the database.
 *
 * @async
 * @function saveWeatherData
 * @memberof module:services/database.service
 * @param {Object} weatherData - Weather data object to be saved
 * @returns {Object} - Saved weather data object
 * @throws {Error} - If there's an error while saving weather data to the database
 */
async function saveWeatherData(weatherData) {
    try {
        const date = new Date(weatherData.dt * 1000);

        const savedWeather = await prisma.weather.create({
            data: {
                condition:    weatherData.weather[0].main,
                description:  weatherData.weather[0].description,
                temperature:  parseInt(weatherData.main.temp - difKelvin),
                feels_like:   parseInt(weatherData.main.feels_like - difKelvin),
                temp_min:     parseInt(weatherData.main.temp_min - difKelvin),
                temp_max:     parseInt(weatherData.main.temp_max - difKelvin),
                pressure:     weatherData.main.pressure,
                humidity:     weatherData.main.humidity,
                datetime:     date,
                city:         weatherData.name,
                icon:         weatherData.weather[0].icon
            },
        });

        return savedWeather;

    } catch (error) {
        console.error('Error al guardar los datos meteorológicos:', error);
        throw error;
    }
}


/**
 * Retrieve recent weather data from the database.
 *
 * @async
 * @function getRecentWeatherData
 * @memberof module:services/database.service
 * @returns {Array} - Array of recent weather data objects
 * @throws {Error} - If there's an error while retrieving recent weather data from the database
 */
async function getRecentWeatherData() {
    try {
        const recentWeatherData = await prisma.weather.findMany({
            take: 10,
            orderBy: {
                datetime: 'desc'
            }
        });
        return recentWeatherData;
    } catch (error) {
        console.error('Error al obtener los datos meteorológicos:', error);
        throw error;
    }
}

module.exports = { saveWeatherData, getRecentWeatherData };