// listing the temp min and max and desciption from the weather.daliy forcast
const weatherConverter = (weatherList) => {
    const weatherHTMLRespresentation = `<section class="weatherList">
    ${weatherList.dt}
    ${Math.round(weatherList.temp.min)}
    ${Math.round(weatherList.temp.max)}
    ${weatherList.weather[0].description}
    </section>`
    return weatherHTMLRespresentation
}