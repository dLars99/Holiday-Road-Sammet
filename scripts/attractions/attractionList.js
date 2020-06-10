const renderAttractionList = () => {
    for (entry of tempCollection) {
        const attractionHTML = makeAttractionComponent(entry)
        const attractionElement = document.querySelector(".attractionLog")

        attractionElement.innerHTML += attractionHTML
    }
}
//temp
let itineraryAttractionObject = {}

const attractionDropdown = document.querySelector("change", clickEvent => {
    tripItinerary.attraction = clickEvent.target.value
    itineraryAttractionObject = attractionDatabase.find(({id}) => id === tripItinerary.attraction)

    const attractionSelectionHTML = addAttractionToItinerary(itineraryAttractionObject)
    document.querySelector(".attraction").innerHTML = attractionSelectionHTML

})