const weatherURL = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKeys.weatherKey}`
let fiveDayForcast = {}


const getWeatherData = () => {
    return fetch(weatherURL).then(
        httpResponse => {
            return httpResponse.json()
        }
    ).then (
        (arryOfWeather) => {
            fiveDayForcast = arrayOfWeather
            console.log(fiveDayForcast)
        }
    )
}