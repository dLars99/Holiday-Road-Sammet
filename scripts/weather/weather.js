const weatherConverter = (weather) => {
    const weatherHTMLRespresentation = `<section class="weatherList">
    ${weatherList.min}
    ${weatherList.max}
    ${weatherList.description}
    </section>`
    return weatherHTMLRespresentation
}