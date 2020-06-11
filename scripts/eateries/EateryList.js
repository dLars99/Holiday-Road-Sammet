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
    
})
