const convertParkObject = (parkObject) => {
        console.log(parkObject.id)
        const parkOptionHTML = `<option value="${parkObject.id}">${parkObject.name}</option>`
        return parkOptionHTML
}