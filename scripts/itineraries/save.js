
// Enable save button once all three itinerary items are selected
const checkItineraryFullness = () => {
    if (tripItinerary.park && tripItinerary.attraction && tripItinerary.eatery) {
        document.querySelector(".saveButton").disabled = false
    }
}


const saveCurrentItinerary = () => {
    // Convert IDs to integers
    tripItinerary.attraction = parseInt(tripItinerary.attraction)
    tripItinerary.eatery = parseInt(tripItinerary.eatery)
    console.log(tripItinerary)
    itineraryJSON = JSON.stringify(tripItinerary)
    console.log(itineraryJSON)
    // 1. Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // 2. Configure it: GET-request for the URL /article/.../load
    xhr.open('POST', 'http://localhost:8088/itineraries', true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    // 3. Send the request over the network
    xhr.send(itineraryJSON);

    // Reload the page
    location.reload()

}