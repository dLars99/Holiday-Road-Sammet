const addParkToItinerary = (selectedPark) => {
    return `<img class="itineraryPark__Image" src="${selectedPark.images[0].url}" 
    alt="${selectedPark.images[0].altText}">
    <h3 class="itineraryPark__Name">${selectedPark.fullName}</h3>
    <div class="popup__button" onclick="parkDetails()">Park Details
        <span class="popup__window" id="parkDetails">Insert details here</span>
    </div>
}