/**
 * Service functions for weather data.
 *
 * All business logic related to fetching weather data must be declared here.
 *
 * @file Service functions for weather data.
 * @author [Emanuel Acosta]
 * @since 1.0.0
 */

// const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
// const weatherApiKey = "4a3a669c1dd2418077d9279914c5e0fa";
const urlBase = process.env.URL_OPENWEATHER;
const weatherApiKey = process.env.WEATHER_API_KEY;

/**
 * Retrieve weather data for a specified city.
 *
 * @async
 * @function getWeatherData
 * @memberof module:services/weather.service
 * @param {string} city - The name of the city to fetch weather data for
 * @returns {Object} - Weather data object retrieved from the OpenWeatherMap API
 * @throws {Error} - If the city is not found or if there's a network error
 */
async function getWeatherData(city) {
    console.log("API_KEY: ", weatherApiKey);

    try {
        const response = await fetch(`${urlBase}?q=${city}&appid=${weatherApiKey}`);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found');
            } else {
                throw new Error('Network error');
            }
        }

        const data = await response.json();

        if (!data || !data.main || !data.weather || !data.weather[0]) {
            throw new Error('Invalid weather data received from API');
        }

        return data;

    } catch (error) {
        console.error('An error occurred: ', error.message);
        throw error;
    }
};

module.exports = {
    getWeatherData
};
