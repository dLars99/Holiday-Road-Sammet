const renderAttractionList = (attractions) => {
    for (entry of attractions) {
        const attractionHTML = makeAttractionComponent(entry)
        const attractionElement = document.querySelector(".attractionLog")

        attractionElement.innerHTML += attractionHTML
    }
}

// Invoke the render function
renderAttractionList(attractions)