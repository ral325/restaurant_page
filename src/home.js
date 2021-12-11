function makeHomePage() {
    let mainDiv = document.querySelector("div#content");

    let headline = document.createElement("h1");
    headline.textContent = "Jay Bilzerian's Diner of Magic";

    let image = document.createElement("img");
    image.src = "https://static01.nyt.com/images/2011/09/28/dining/28MAGIC_SPAN/28MAGIC-jumbo.jpg?quality=75&auto=webp";

    let copy = document.createElement("p");
    copy.textContent = "Welcome to Jay Bilzerian's Diner of Magic! The food sucks but the magic is pretty okay!"

    mainDiv.appendChild(headline);
    mainDiv.appendChild(image);
    mainDiv.appendChild(copy);
}

export { makeHomePage };