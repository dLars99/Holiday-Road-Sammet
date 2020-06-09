import apiKeys from "./Settings.js";

API.getAttractionList()
.then(() => renderAttractionList())