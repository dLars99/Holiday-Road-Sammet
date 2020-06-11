// Loop through available itinerary objects, convert into HTML, and insert into the DOM

const itineraryList = (itineraryArray) => {
    for (itinerary in itineraryArray) {
        const itineraryHTML = itineraryConverter(itinerary)
        document.querySelector(".itineraryList").innerHTML += itineraryHTML
    }
}