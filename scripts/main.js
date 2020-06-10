import apiKeys from "./Settings.js";

getAttractionList()
.then(() => renderAttractionList())


getEateryData().then ( ()=> { 
    eateryList()
})
getParkData(apiKeys.npsKey)
    .then(parksData => generateParksList(parksData))
