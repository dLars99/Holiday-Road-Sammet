// Object for current itinerary to-be-built
const tripItinerary = {
    "park": "",
    "attraction": "",
    "eatery": ""
    // "weather": weatherFunction()
}

let parksDatabase = []

const getParkData = () => {
    //REMOVE &stateCode=TN
        const parksURL = `https://developer.nps.gov/api/v1/parks?&api_key=${apiKeys.npsKey}&stateCode=TN`
        return fetch(parksURL)
            .then(response => response.json())
            .then(rawParkData => parksDatabase = rawParkData.data)
}
