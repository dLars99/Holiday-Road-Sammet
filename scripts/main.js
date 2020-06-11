// import apiKeys from "./Settings.js";

// Object for current itinerary to-be-built
const tripItinerary = {
    "park": "",
    "attraction": "",
    "eatery": ""
}

getAttractionList()
.then(() => renderAttractionList())


getEateryData().then ( ()=> { 
    eateryList()
})

getParkData()
    .then(parksData => generateParksList(parksData))
    .then(() => getItineraryData())
    .then(itineraryArray => itineraryList(itineraryArray))
