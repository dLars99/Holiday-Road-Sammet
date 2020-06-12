const addParkToItinerary = (selectedPark) => {
    return `<h3 class="itineraryPark__Name">${selectedPark.fullName}</h3>
        <button id="parkBtn">Park Details</button>
        <div id="parkModal" class="eateryModal">
            <div class="eatery__information">   
                <span class="eateryClose">&times;</span>
                <h4>${selectedPark.fullName}</h4>
                <p>Address: ${selectedPark.addresses[1].line1}<br>
                        ${selectedPark.addresses[1].city}, ${selectedPark.addresses[1].stateCode} ${selectedPark.addresses[0].postalCode}<br>
                Phone: ${selectedPark.contacts.phoneNumbers[0].phoneNumber}<br>
                Email: ${selectedPark.contacts.emailAddresses[0].emailAddress}<br>
                Website: <a href="${selectedPark.url} target="_blank">${selectedPark.url}</a>
            </div>
        </div>`
}
// return

//         <div>${eateryItineraryObject.businessName}</div>
    
//         <button id="eateryBtn">Eatery Detail</button>

//         <div id="eateryModal" class="eateryModal">

//             <div class="eatery__information">
//                 <span class="eateryClose">&times;</span>
//                 <h3>${eateryItineraryObject.businessName}</h3>
//                 <p>${eateryItineraryObject.description}</p>
//                 <div>Pet Friendly: ${eateryItineraryObject.ameneties.petFriendly ? "Yes" :"No"}</div>
//                 <div>Diaper Facility: ${eateryItineraryObject.ameneties.diaperFacility ? "Yes" :"No"}</div>
//                 <div>Playground: ${eateryItineraryObject.ameneties.playground ? "Yes" :"No"}</div>
//                 <div>Restrooms: ${eateryItineraryObject.ameneties.restrooms ? "Yes" :"No"}</div>
//             </div>

//         </div>
//         `

// }


// Directions: $ {selectedPark.directionsInfo}