// Loop through available itinerary objects, convert into HTML, and insert into the DOM

const itineraryList = (itineraries) => {
    for (itinerary of itineraries) {
        const itineraryHTML = itineraryConverter(itinerary)
        document.querySelector(".itineraryList").innerHTML += itineraryHTML
    }
}