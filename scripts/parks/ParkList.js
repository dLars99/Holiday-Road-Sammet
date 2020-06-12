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

    // Render selected park image to the background. If the object has no image, use a default
    let imageURL = ""
    if (itineraryParkObject.images[0]) {
        imageURL = itineraryParkObject.images[0].url
        altText = itineraryParkObject.images[0].altText
    } else {
        imageURL = "https://www.nps.gov/grte/planyourvisit/images/Ncascade_summer2018_bonney-1.JPG"
        altText = "U.S. National Parks"
    }

    document.querySelector(".itineraryImage").innerHTML = `<img src="${imageURL}" alt="${altText}">`

    // Render selected park to the itinerary builder in the DOM
    const parkSelectionHTML = addParkToItinerary(itineraryParkObject)
    document.querySelector(".park").innerHTML = parkSelectionHTML
   
    /* Building out the Modal */
    const parkModal = document.querySelector("#parkModal");
    const parkBtn = document.querySelector("#parkBtn");
    const parkSpan = document.getElementsByClassName("eateryClose")[0];

    // Opens Modal
    parkBtn.onclick = () => parkModal.style.display = "block";

    // When clicking on the x it will close
    parkSpan.onclick = () => parkModal.style.display = "none";

    // When you click anywhere outside the modal it will close
    window.onclick = (event) => {
        if (event.target === parkModal) {
            parkModal.style.display = "none";
        }
    }
    // Check for full itinerary
    checkItineraryFullness()
})
