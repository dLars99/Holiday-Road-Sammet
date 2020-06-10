// Object for current itinerary to-be-built
const eateryItinerary = {
    "park": "",
    "attraction": "",
    "eatery": ""
}

let eateryCollection = []

const getEateryData = () => {
    return fetch("http://holidayroad.nss.team/eateries").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    ) .then(
        (arrayOfEatery) => {
            eateryCollection = arrayOfEatery
        }
    )
}
