
// const API = {
//     getAttractionList () {
//         return fetch("http://holidayroad.nss.team/bizarreries")
//             .then(response => 
//                 response.json())

//     }
// }
let tempCollection = []
const getAttractionList = () => {
    return fetch("http://holidayroad.nss.team/bizarreries").then(
        (response) => {
            return response.json()
        }
    ).then((attractionArray) => {
        tempCollection = attractionArray
        console.log(tempCollection)
    }
    )
}