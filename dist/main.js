(()=>{"use strict";function e(){let e=document.querySelector("div#content"),t=document.createElement("h1");t.textContent="Jay Bilzerian's Diner of Magic";let n=document.createElement("img");n.src="https://static01.nyt.com/images/2011/09/28/dining/28MAGIC_SPAN/28MAGIC-jumbo.jpg?quality=75&auto=webp";let o=document.createElement("p");o.textContent="Welcome to Jay Bilzerian's Diner of Magic! The food sucks but the magic is pretty okay!",e.appendChild(t),e.appendChild(n),e.appendChild(o)}e();let t=[...document.querySelectorAll(".tablinks")];for(let e=0;e<t.length;e++)t[e].addEventListener("click",n);function n(){document.getElementById("content").innerHTML="","Home"===this.textContent?(console.log(this.textContent),e()):"Contact"===this.textContent?function(){let e=document.querySelector("div#content"),t=document.createElement("h1");t.textContent="Contact";let n=document.createElement("p");n.textContent="Phone: 555-55-MAGIC";let o=document.createElement("p");o.textContent="Address: 123 Magic St., Magictown, Illinois, 62442",e.appendChild(t),e.appendChild(n),e.appendChild(o)}():function(){let e=document.querySelector("div#content"),t=document.createElement("h1");function n(e,t){return{name:e,price:t,printMenuItem:()=>e+" $"+t}}t.textContent="Menu";let o=[n("pizza",15),n("burger",10),n("salad",8)];e.appendChild(t);for(let t=0;t<o.length;t++){let n=document.createElement("p");n.textContent=o[t].printMenuItem(),e.appendChild(n)}}()}})();