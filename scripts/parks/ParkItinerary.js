const addParkToItinerary = (selectedPark) => {
    return `<h3 class="itineraryPark__Name">${selectedPark.fullName}</h3>
    <div class="popup__button" onclick="parkDetails()"><button>Park Details</button>
        <span class="popup__window" id="parkDetails">
        <p>Address: ${selectedPark.addresses[1].line1}<br>
                ${selectedPark.addresses[1].city}, ${selectedPark.addresses[1].stateCode} ${selectedPark.addresses[0].postalCode}<br>
        Phone: ${selectedPark.contacts.phoneNumbers[0].phoneNumber}<br>
        Email: ${selectedPark.contacts.emailAddresses[0].emailAddress}<br>
        Website: <a href="${selectedPark.url} target="_blank">${selectedPark.url}</a>
        </span>
    </div>`
}


// Directions: $ {selectedPark.directionsInfo}

{/* < img class = "itineraryPark__Image"
src = "${selectedPark.images[0].url}"
alt = "${selectedPark.images[0].altText}" > */}