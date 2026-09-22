const lat = 43.3248;
const lon = -79.7990;

// The typo is still on this line! Can you find what is missing around {lat}?
const url = `https://open-meteo.com{lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m`;

async function getWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Update the HTML elements with the API data
    document.getElementById('temp').innerText = data.current.temperature_2m;
    document.getElementById('wind').innerText = data.current.wind_speed_10m;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('temp').innerText = 'Error';
  }
}

getWeather();
