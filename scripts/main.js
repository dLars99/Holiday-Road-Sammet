import apiKeys from "./Settings.js";
getParkData(apiKeys.npsKey).then((parksData) => generateParksList(parksData))