// Retrieve itinerary data from local JSON server
const getItineraryData = () => {
    const parksURL = `http://localhost:8088/itineraries`
    return fetch(parksURL)
        .then(response => response.json())
}
