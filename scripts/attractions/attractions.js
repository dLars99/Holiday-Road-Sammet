

const makeAttractionComponent = (attraction) => {
    // Create your own HTML structure for a journal entry
    return `
<option value="${attraction.id}"> ${attraction.name}</option>
    `
}




/* <h2>Bizarre Attraction:${attraction.name}</h2>
<div>Location: ${attraction.city},${attraction.state}</div>

<div>Description: ${attraction.description}</div>
<div>Amenities?${attraction.amenities}</div>
<div>Sells souvenirs?${attraction.souvenirs}</div>
<div>Are there restrooms?${attraction.restrooms}</div> */