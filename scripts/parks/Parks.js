const convertParkObject = (parkObject) => {
        const parkOptionHTML = `<option value="${parkObject.id}">${parkObject.name}</option>`
        return parkOptionHTML
}