const weatherList = () => {
    // going through the weather in daily weather forcast
    for(const currentWeather of fiveDayForcast.daily){
    // converts the current weather to it's HTML
        const weatherHTML = weatherConverter(currentWeather)
        // find the section element in index.html
        const weatherListSectionElement = document.querySelector(".weatherList")
        // put the weather HTML into the <section> element 
        weatherListSectionElement.innerHTML += weatherHTML
    }
}