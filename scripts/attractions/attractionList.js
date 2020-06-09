const renderAttractionList = () => {
    for (entry of tempCollection) {
        const attractionHTML = makeAttractionComponent(entry)
        const attractionElement = document.querySelector(".attractionLog")

        attractionElement.innerHTML += attractionHTML
    }
}

// Invoke the render function
//renderAttractionList(attractions)