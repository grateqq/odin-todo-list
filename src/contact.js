// src/contact
export {printcontact};

import odinImage from "./odin.png";


//ApendChild

function printcontact() {
 const content = document.getElementById("content");

 const h = document.createElement("h1");
 h.textContent = "Contactos"

 const p = document.createElement("p")
 p.textContent = "Los mejores platos de la red"



 const pdos = document.createElement("p")
 pdos.textContent = "SE 5848585652"

 const image = document.createElement("img");
 image.src = odinImage;

 content.appendChild(h)
 content.appendChild(p)
 content.appendChild(image)
 content.appendChild(pdos)
}
