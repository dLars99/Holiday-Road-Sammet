// Pull selected attributes from databases and convert to HTML

const itineraryConverter = (currentItinerary) => {
    console.log(currentItinerary)
    // Pull data via IDs in saved object
    currentItineraryPark = parksDatabase.find(({ id }) => id === currentItinerary.park)
    currentItineraryAttraction = tempCollection.find(({ id }) => id === currentItinerary.attraction)
    currentItineraryEatery = eateryCollection.find(({ id }) => id === currentItinerary.eatery)

    console.log(currentItineraryPark, currentItineraryAttraction, currentItineraryEatery)
    
    const itineraryObjectHTML = `<section class="itinerary">
    <p class="itineraryHeader">Park:</p>
    <p class="itineraryStop">${currentItineraryPark.fullName}</p>
    <p class="itineraryHeader">Bizarrerie:</p>
    <p class="itineraryStop">${currentItineraryAttraction.name}</p>
    <p class="itineraryHeader">Eatery:</p>
    <p class="itineraryStop">${currentItineraryEatery.businessName}</p>
    </section>`
    return itineraryObjectHTML
}