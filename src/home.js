// src/home.js
export {printhome};

import odinImage from "./odin.png";


//ApendChild

function printhome() {
 const content = document.getElementById("content");

 const h = document.createElement("h1");
 h.textContent = "Resto-Ceviche"

 const p = document.createElement("p")
 p.textContent = "Los mejores platos de la red"



 const pdos = document.createElement("p")
 pdos.textContent = "Solo con reservas"

 const image = document.createElement("img");
 image.src = odinImage;

 content.appendChild(h)
 content.appendChild(p)
 content.appendChild(image)
 content.appendChild(pdos)
}