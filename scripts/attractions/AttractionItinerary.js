const addAttractionToItinerary = (selectedAttraction) => {
    console.log(`${selectedAttraction}`)
return `
<h3 class="itineraryAttraction__Name">${selectedAttraction.name}</h3>
 <button class="attraction__button">Details</button>
`
}