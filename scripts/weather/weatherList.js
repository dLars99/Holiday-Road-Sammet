const weatherList = () => {
    for(const currentWeather of fiveDayForcast){
        const weatherHTML = weatherConverter(currentWeather)
        const weatherListSectionElement = document.querySelector(".weatherList")
        weatherListSectionElement.innerHTML += weatherHTML
    }
}