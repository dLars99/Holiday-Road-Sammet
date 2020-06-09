const eateryList = () => {

    for (const eateryObject of eateryCollection) {
        const eateryHTMLRepresentation = eateryConverter(eateryObject)

        const eaterySelectionElement = document.querySelector(".eateryList")
        eaterySelectionElement.innerHTML += eateryHTMLRepresentation
    }
}

