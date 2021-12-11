function makeMenuPage() {
    let mainDiv = document.querySelector("div#content");

    let headline = document.createElement("h1");
    headline.textContent = "Menu";

    function MenuItem(name, price) {
        return {
            name: name,
            price: price,

            printMenuItem() {
                return name + " $" + price;
            }
        }
    }

    let menuItems = [MenuItem("pizza", 15), MenuItem("burger", 10), MenuItem("salad", 8)];

    mainDiv.appendChild(headline);
    for (let i = 0; i < menuItems.length; i++) {
        let curItem = document.createElement("p");
        curItem.textContent = menuItems[i].printMenuItem();
        mainDiv.appendChild(curItem);
    }

}

export { makeMenuPage };