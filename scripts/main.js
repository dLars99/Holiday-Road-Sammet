import apiKeys from "./Settings.js";

API.getAttractionList()
.then(() => renderAttractionList())
getParkData(apiKeys.npsKey)
    .then(parksData => generateParksList(parksData))
