const renderAttractionList = () => {
    document.querySelector(".attractionLog").innerHTML = `<option disabled selected value>Select a Bizarre Attraction</option>`
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

//Sets global tripItinerary to value of the click target
    tripItinerary.attraction = clickEvent.target.value
//Searches for the id and sets value to that object
    itineraryAttractionObject = tempCollection.find( place  => place.id.toString() === tripItinerary.attraction)
    itineraryAttractionObject.ameneties.souvenirs = (itineraryAttractionObject.ameneties.souvenirs ? 'Yes' : 'No');
    itineraryAttractionObject.ameneties.restrooms = (itineraryAttractionObject.ameneties.restrooms ? 'Yes' : 'No');
    const attractionSelectionHTML = addAttractionToItinerary(itineraryAttractionObject)
    document.querySelector(".attraction").innerHTML = attractionSelectionHTML

    // Check for full itinerary
    checkItineraryFullness()
})
