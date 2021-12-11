import { makeHomePage } from './home.js';
import { makeContactPage } from './contact.js';
import { makeMenuPage } from './menu.js';

makeHomePage();

let tabs = [...document.querySelectorAll(".tablinks")];

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", controlTabs);
}

function controlTabs() {
    document.getElementById("content").innerHTML = "";

    if (this.textContent === "Home") {
        console.log(this.textContent);
        makeHomePage();
    } else if (this.textContent === "Contact") {
        makeContactPage();
    } else {
        makeMenuPage();
    }
}