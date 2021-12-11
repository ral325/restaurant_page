function makeContactPage() {
    let mainDiv = document.querySelector("div#content");

    let headline = document.createElement("h1");
    headline.textContent = "Contact";

    let contactInfoPhone = document.createElement("p");
    contactInfoPhone.textContent = "Phone: 555-55-MAGIC"

    let contactInfoAddress = document.createElement("p");
    contactInfoAddress.textContent = "Address: 123 Magic St., Magictown, Illinois, 62442"

    mainDiv.appendChild(headline);
    mainDiv.appendChild(contactInfoPhone);
    mainDiv.appendChild(contactInfoAddress);
}

export { makeContactPage };