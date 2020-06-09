import apiKeys from "./Settings.js";
getEateryData().then ( ()=> { 
    eateryList()
})
getParkData(apiKeys.npsKey)
    .then(parksData => generateParksList(parksData))
