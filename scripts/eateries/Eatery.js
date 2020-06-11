const eateryConverter = (eateryObject) => {

    const eateryHTMLRepresentation = 
        `
        <option disable>Select Eatery</option>
        <option value="${eateryObject.id}">${eateryObject.businessName}</option>
        `
    return eateryHTMLRepresentation
}