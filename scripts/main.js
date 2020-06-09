import apiKeys from "./Settings.js";

getAttractionList()
.then(() => renderAttractionList())


getParkData(apiKeys.npsKey)
    .then(parksData => generateParksList(parksData))
