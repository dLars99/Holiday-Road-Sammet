const eateryitineraryHTML = (eateryItineraryObject) => {
    return `
        <div>${eateryItineraryObject.businessName}</div>
    
        <button id="eateryBtn">Eatery Detail</button>

        <div id="eateryModal" class="eateryModal">

            <div class="eatery__information">
                <span class="eateryClose">&times;</span>
                <p>${eateryItineraryObject.description}</p>
                <div>Pet Friendly: ${eateryItineraryObject.ameneties.petFriendly ? "Yes" :"No"}</div>
            </div>

        </div>
        `
}