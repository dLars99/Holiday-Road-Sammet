const weatherList = () => {
    for(const currentWeather of weatherFive){
        const weatherHTML = weatherConverter(currentWeather)
        const itineraryPreviewArticleElement = document.querySelector(".weatherList")
        itineraryPreviewArticleElement.innerHTML += weatherHTML
    }
}