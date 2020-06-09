const weatherURL = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKeys.weatherKey}`
let weatherFive = {}


const getWeatherData = () => {
    return fetch(weatherURL).then(
        httpResponse => {
            return httpResponse.json()
        }
    ).then (
        (fiveDayForcast) => {
            weatherFive = fiveDayForcast
            console.log(weatherFive)
        }
    )
}