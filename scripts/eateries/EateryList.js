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
    eateryItinerary.eatery = clickEvent.target.value
    //
    eateryObject = parksDatabase.find(({id}) => id === eateryItinerary.eatery)
    
    const selectHTMLEatery = eateryitineraryHTML(eateryObject)
    document.querySelector(".eatery").innerHTML = selectHTMLEatery
    
})
