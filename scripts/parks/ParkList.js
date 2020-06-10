let intineraryPark = {}

const generateParksList = (parks) => {
    for (const currentParksObject of parksDatabase) {
        const parkListEntry = convertParkObject(currentParksObject)
        const parkSelectElement = document.querySelector(".parkList")
        parkSelectElement.innerHTML += parkListEntry
    }
}

const parkDropdown = document.querySelector(".parkList")

const clearFishList = () => fishArticleElement.innerHTML = ""

parkDropdown.addEventListener("change", clickEvent => {
    // Get the value of the option chosen by the user
    const userChoice = clickEvent.target.value
    tripItinerary.park = parksDatabase.find(({id}) => id === userChoice);

    // Faith's weather function. Uncomment and fill in with proper function name
    // weatherFunction(itineraryPark.latitude, itineraryPark.longitude)

    // Render selected park to the itinerary builder in the DOM
    const parkSelectionHTML = addParkToItinerary(tripItinerary.park)
    document.querySelector(".park").innerHTML = parkSelectionHTML
})
