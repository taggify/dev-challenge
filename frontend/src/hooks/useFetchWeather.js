export const FetchWeather = async (city) => {
    try {
        const response = await fetch(`http://localhost:3000/weather`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ city: city })
        });

        if (!response.ok) {
            throw new Error('City not found or other network error');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('An error occurred: ', error.message);
        throw error;
    }
};