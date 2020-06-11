
// Enable save button once all three itinerary items are selected
const checkItineraryFullness = () => {
    if (tripItinerary.park && tripItinerary.attraction && tripItinerary.eatery) {
        document.querySelector(".saveButton").disabled = false
    }
}


const saveCurrentItinerary = () => {
    // Convert object to JSON
    itineraryJSON = JSON.stringify(tripItinerary)

    // Post itinerary to database
    fetch("http://localhost:8088/itineraries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: itineraryJSON
    }).then(() => {
        // Refresh the page after save is complete
        location.reload()
    })

}