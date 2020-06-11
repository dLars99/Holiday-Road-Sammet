// Generate dropdown list of all parks
const generateParksList = (parks) => {
    document.querySelector(".parkList").innerHTML = `<option disabled selected value>Select a National Park</option>`
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
    itineraryParkObject = parksDatabase.find(({id}) => id === tripItinerary.park)
    
    // Clear any existing weather and get weather for newly-selected park
    document.querySelector(".weatherList").innerHTML = ""
    getWeatherData(itineraryParkObject.latitude, itineraryParkObject.longitude).then(() => weatherList())

    // Render selected park to the itinerary builder in the DOM
    const parkSelectionHTML = addParkToItinerary(itineraryParkObject)
    document.querySelector(".park").innerHTML = parkSelectionHTML

    // Check for full itinerary
    checkItineraryFullness()
})
