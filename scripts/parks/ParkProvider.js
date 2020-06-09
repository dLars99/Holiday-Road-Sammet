const getParkData = (parkKey) => {
        console.log(parkKey)
        const parksURL = `https://developer.nps.gov/api/v1/parks?&api_key=${parkKey}`
        return fetch(parksURL)
            .then(response => response.json())
}
