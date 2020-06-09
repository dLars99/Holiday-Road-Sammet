const convertParkObject = (parkObject) => {
        const parkOptionHTML = `<option value=${parkObject.fullName}>${parkObject.name}</option>`
        return parkOptionHTML
}