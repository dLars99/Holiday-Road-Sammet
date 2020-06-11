
// Enable save button once all three itinerary items are selected
const checkItineraryFullness = () => {
    if (tripItinerary.park && tripItinerary.attraction && tripItinerary.eatery) {
        document.querySelector(".saveButton").disabled = false
    }
}


const saveCurrentItinerary = () => {
    // console.log(tripItinerary)
    itineraryJSON = JSON.stringify(tripItinerary)
    // console.log(itineraryJSON)
    // // 1. Create a new XMLHttpRequest object
    // let xhr = new XMLHttpRequest()

    // // 2. Configure it: GET-request for the URL /article/.../load
    // xhr.open('POST', 'http://localhost:8088/itineraries', true)
    // xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')

    // // 3. Send the request over the network
    // xhr.send(itineraryJSON)
    //     .then(() => refreshPage())

    // Reload the page
    // location.reload()

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

// const refreshPage = () => {
//     location.reload()
// }