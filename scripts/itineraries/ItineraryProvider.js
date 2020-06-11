// Retrieve itinerary data from local JSON server
const getItineraryData = () => {
    const itineraryURL = `http://localhost:8088/itineraries`
    return fetch(itineraryURL)
        .then(response => response.json())
}
