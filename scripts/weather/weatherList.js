const weatherList = () => {
    for(const currentWeather of fiveDayForcast.daily){
        const weatherHTML = weatherConverter(currentWeather)
        const weatherListSectionElement = document.querySelector(".weatherList")
        weatherListSectionElement.innerHTML += weatherHTML
    }
}