const generateParksList = (parks) => {
    for (const currentParksObject of parks.data) {
        const parkListEntry = convertParkObject(currentParksObject)
        const parkSelectElement = document.querySelector(".parkList")
        parkSelectElementElement.innerHTML += parkListEntry
    }
}