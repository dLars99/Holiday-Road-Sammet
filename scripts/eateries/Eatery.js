const eateryConverter = (eateryObject) => {

    const eateryHTMLRepresentation = 
        `
        <option value="${eateryObject.id}">${eateryObject.businessName}</option>
        `
    return eateryHTMLRepresentation
}