// import apiKeys from "./Settings.js";

getAttractionList()
.then(() => renderAttractionList())


getEateryData().then ( ()=> { 
    eateryList()
})

getParkData()
    .then(parksData => generateParksList(parksData))
