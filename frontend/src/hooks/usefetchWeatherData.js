export const fetchWeatherData = async (setWeatherData) => {
    try {
      const response = await fetch('http://localhost:3000/weather'); // Reemplaza con la URL de tu endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
};