const addParkToItinerary = (selectedPark) => {
    return `<img class="itineraryPark__Image" src="${selectedPark.images[0].url}" 
    alt="${selectedPark.images[0].altText}">
    <h3 class="itineraryPark__Name">${selectedPark.fullName}</h3>
     <button class="park__button">Details</button>`
}