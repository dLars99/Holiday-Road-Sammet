const eateryList = () => {

    for (const eateryObject of eateryCollection) {
        const eateryHTMLRepresentation = eateryConverter(eateryObject)

        const eaterySelectionElement = document.querySelector(".eateryList")
        eaterySelectionElement.innerHTML += eateryHTMLRepresentation
    }
}

// Object to be used to hold the current selection of the section options.
let eateryObject = {}

// Create a document selector for our addVentListener.
const eaterySelection = document.querySelector(".eateryList")


// Event listener for clicks on the eatery options
eaterySelection.addEventListener("change", (clickEvent) => {
    // Setting a variable to a clickEvent that target the value of the select value.
    tripItinerary.eatery = parseInt(clickEvent.target.value)
    // Using find to find the id. Found out that the id 
    eateryObject = eateryCollection.find(eatery => eatery.id === tripItinerary.eatery)

    const selectHTMLEatery = eateryitineraryHTML(eateryObject)
    document.querySelector(".eatery").innerHTML = selectHTMLEatery

    // Building out the Modal with first 
    const eateryModal = document.querySelector("#eateryModal");
    const eateryBtn = document.querySelector("#eateryBtn");
    const eaterySpan = document.getElementsByClassName("eateryClose")[0];

    // When the user clicks on the button, open the modal
    eateryBtn.onclick = () => eateryModal.style.display = "block";
    

    // When the user clicks on <span> (x), close the modal
    eaterySpan.onclick = () => eateryModal.style.display = "none";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
        if (event.target == modal) {
            eateryModal.style.display = "none";
        }
    }

    
    // Check for full itinerary
    checkItineraryFullness()
})
