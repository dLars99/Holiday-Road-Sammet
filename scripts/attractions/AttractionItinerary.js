


const addAttractionToItinerary = (selectedAttraction) => {
    return `
<h3 class="itineraryActivity__Name">${selectedAttraction.name}</h3>
<div class ="popup__button"><button id="attractionBtn">Attraction Detail</button></div>

<div id="attractionModal" class="eateryModal">

    <div class="eatery__information">
    <span class="attractionClose">&times;</span>
 <h3>${selectedAttraction.name}</h3> 
 <p>Location: ${selectedAttraction.city},${selectedAttraction.state}<br>
 Description: ${selectedAttraction.description}<br>
 Amenities: <br>
 Sells souvenirs? ${selectedAttraction.ameneties.souvenirs}<br>
 Are there restrooms? ${selectedAttraction.ameneties.restrooms} </p>
 </div>
 </div>
`
}
