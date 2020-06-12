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
    tripItinerary.attraction = parseInt(clickEvent.target.value)
//Searches for the id and sets value to that object
    itineraryAttractionObject = tempCollection.find( place  => place.id === tripItinerary.attraction)
//Uses ternary to change true and false to yes and no
    itineraryAttractionObject.ameneties.souvenirs = (itineraryAttractionObject.ameneties.souvenirs ? 'Yes' : 'No');
    itineraryAttractionObject.ameneties.restrooms = (itineraryAttractionObject.ameneties.restrooms ? 'Yes' : 'No');
    const attractionSelectionHTML = addAttractionToItinerary(itineraryAttractionObject)
    document.querySelector(".attraction").innerHTML = attractionSelectionHTML

 



// Get the modal
const attractionModal = document.getElementById("attractionModal");

// Get the button that opens the modal
const attractionBtn = document.getElementById("attractionBtn");

// Get the <span> element that closes the modal
const attractionSpan = document.getElementsByClassName("attractionClose")[0];

// When the user clicks the button, open the modal 
attractionBtn.onclick = () => attractionModal.style.display = "block";

// When the user clicks on <span> (x), close the modal
attractionSpan.onclick = () => attractionModal.style.display = "none";

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === attractionModal) {
    attractionModal.style.display = "none";
  }
}


    // Check for full itinerary
    checkItineraryFullness()
})
//NEED TO MOVE ABOVE 3 LINES TO BOTTOM