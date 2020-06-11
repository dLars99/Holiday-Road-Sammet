const eateryitineraryHTML = (eateryItineraryObject) => {
    return `<div>${eateryItineraryObject.businessName}</div>
    <button id="myBtn">Open Modal</button>

        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Some text in the Modal..</p>
            </div>
        </div>`
}