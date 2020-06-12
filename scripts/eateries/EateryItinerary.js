const eateryitineraryHTML = (eateryItineraryObject) => {
    return `
        <div class="itineraryActivity__Name">${eateryItineraryObject.businessName}</div>
    <br>
        <div class ="popup__button"><button id="eateryBtn">Eatery Detail</button></div>

        <div id="eateryModal" class="eateryModal">

            <div class="eatery__information">
                <span class="eateryClose">&times;</span>
                <h3>${eateryItineraryObject.businessName}</h3>
                <p>${eateryItineraryObject.description}</p>
                <div>Pet Friendly: ${eateryItineraryObject.ameneties.petFriendly ? "Yes" :"No"}</div>
                <div>Diaper Facility: ${eateryItineraryObject.ameneties.diaperFacility ? "Yes" :"No"}</div>
                <div>Playground: ${eateryItineraryObject.ameneties.playground ? "Yes" :"No"}</div>
                <div>Restrooms: ${eateryItineraryObject.ameneties.restrooms ? "Yes" :"No"}</div>
            </div>

        </div>
        `
}