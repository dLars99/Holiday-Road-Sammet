const weatherList = () => {
    for(const currentWeather of weatherFive){
        const weatherHTML = weatherConverter(currentWeather)
        const weatherListSectionElement = document.querySelector(".weatherList")
        weatherListSectionElement.innerHTML += weatherHTML
    }
}