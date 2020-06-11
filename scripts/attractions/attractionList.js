const renderAttractionList = () => {
    for (entry of tempCollection) {
        const attractionHTML = makeAttractionComponent(entry)
        const attractionElement = document.querySelector(".attractionLog")

        attractionElement.innerHTML += attractionHTML
    }
}





//temp
let itineraryAttractionObject = {}

const attractionDropdown = document.querySelector(".attractionLog")

//Listens for changes to the dropdown and activates the next bit
attractionDropdown.addEventListener("change", clickEvent => {

    tripItinerary.attraction = parseInt(clickEvent.target.value)

    itineraryAttractionObject = tempCollection.find( place  => place.id === tripItinerary.attraction)

    const attractionSelectionHTML = addAttractionToItinerary(itineraryAttractionObject)
    document.querySelector(".attraction").innerHTML = attractionSelectionHTML

    // Check for full itinerary
    checkItineraryFullness()
})
