
let tempCollection = []
const getAttractionList = () => {
    return fetch("http://holidayroad.nss.team/bizarreries").then(
        (response) => {
            return response.json()
        }
    ).then((attractionArray) => {
        tempCollection = attractionArray
    }
    )
}