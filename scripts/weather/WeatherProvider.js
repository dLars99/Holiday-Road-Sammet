// import apiKeys from "../Settings.js";

let fiveDayForcast = {}

// this is fetching the data for the weather api, info is base on the lat and lon of parks and fetching daily weather
const getWeatherData = (lat, lon) => {
  

   const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${apiKeys.weatherKey}&units=imperial`
    return fetch(weatherURL).then(
        httpResponse => {
            return httpResponse.json()
        }
    ).then (
// this is running through the weather data
        (arrayOfWeather) => {
            fiveDayForcast = arrayOfWeather
            console.log(fiveDayForcast)
        }
    )
}


