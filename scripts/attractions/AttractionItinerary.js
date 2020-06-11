const addAttractionToItinerary = (selectedAttraction) => {
    return `
<h3 class="itineraryAttraction__Name">${selectedAttraction.name}</h3>
 <div class="popup__button" onclick="attractionDetails()"><button>Bizarrerie Details</button> 
 <span class="popup__window" id="attractionDetails">
 <h2>Bizarre Attraction:${selectedAttraction.name}</h2> <br>
 <p>Location: ${selectedAttraction.city},${selectedAttraction.state}<br>
 Description: ${selectedAttraction.description}<br>
 Amenities: <br>
 Sells souvenirs? ${selectedAttraction.ameneties.souvenirs}<br>
 Are there restrooms? ${selectedAttraction.ameneties.restrooms} </p>
 </div>
`
}





