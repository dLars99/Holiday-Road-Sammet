const eateryConverter = (eateryObject) => {

    const eateryHTMLRepresentation = 
        `<selection>
            <option>${eateryObject.businessName}</option>
        </selection>`
    return eateryHTMLRepresentation
}