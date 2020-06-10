// listing the temp min and max and desciption from the weather.daliy forcast
const weatherConverter = (weather) => {
    const weatherHTMLRespresentation = `<section class="weatherList">
    ${weatherList.temp.min}
    ${weatherList.temp.max}
    ${weatherList.weather[0].description}
    </section>`
    return weatherHTMLRespresentation
}