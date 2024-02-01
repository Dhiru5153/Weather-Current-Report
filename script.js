
const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city) => {
  document.getElementById('cityName').innerHTML = city;
  function convertUnixTimestamp(timestamp) {
    const milliseconds = timestamp * 1000;
    const dateObject = new Date(milliseconds);
    const humanReadable = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return humanReadable;
  }
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // Assuming these are HTML elements with corresponding IDs
      // document.getElementById('cloud_pct').innerHTML = data.cloud_pct;
      document.getElementById('feels_like').innerHTML = data.feels_like;
      document.getElementById('humidity').innerHTML = data.humidity;
      document.getElementById('humidity2').innerHTML = data.humidity;
      document.getElementById('max_temp').innerHTML = data.max_temp + 3;
      document.getElementById('min_temp').innerHTML = data.min_temp - 3;

      document.getElementById('temp').innerHTML = data.temp;
      document.getElementById('temp2').innerHTML = data.temp;
      document.getElementById('wind_degrees').innerHTML = data.wind_degrees;
      document.getElementById('wind_speed').innerHTML = data.wind_speed;
      document.getElementById('wind_speed2').innerHTML = data.wind_speed;
      const sunriseTime = convertUnixTimestamp(data.sunrise);
      const sunsetTime = convertUnixTimestamp(data.sunset);
      document.getElementById('sunrise').innerHTML = sunriseTime;
      document.getElementById('sunset').innerHTML = sunsetTime;
    })
    .catch(err => {
      console.error('There was a problem with the fetch operation:', err);
    });
}



submit.addEventListener("click", (e) => {
  e.preventDefault(); // Correct way to prevent form submission

  const cityValue = document.getElementById('city').value; // Assuming 'city' is an input element
  getWeather(cityValue);
});


