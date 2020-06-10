// Generate dropdown list of all parks
const generateParksList = (parks) => {
    for (const currentParksObject of parksDatabase) {
        const parkListEntry = convertParkObject(currentParksObject)
        const parkSelectElement = document.querySelector(".parkList")
        parkSelectElement.innerHTML += parkListEntry
    }
}

// Object for current selection
let intineraryParkObject = {}

// Take user-selected park and populate the itinerary builder
const parkDropdown = document.querySelector(".parkList")

parkDropdown.addEventListener("change", clickEvent => {
    // Get the value of the option chosen by the user
    tripItinerary.park = clickEvent.target.value
    itineraryParkObject = parksDatabase.find(({id}) => id === tripItinerary.park);

    // Faith's weather function. Uncomment and fill in with proper function name
    // getWeatherData(itineraryParkObject.latitude, itineraryParkObject.longitude)

    // Render selected park to the itinerary builder in the DOM
    const parkSelectionHTML = addParkToItinerary(itineraryParkObject)
    document.querySelector(".park").innerHTML = parkSelectionHTML
})
