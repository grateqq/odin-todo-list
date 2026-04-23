// src/menu
export {printmenu};

import odinImage from "./odin.png";


//ApendChild

function printmenu() {
 const content = document.getElementById("content");

 const h = document.createElement("h1");
 h.textContent = "Menu de la Casa"

 const p = document.createElement("p")
 p.textContent = "Los mejores platos de la red"



 const pdos = document.createElement("p")
 pdos.textContent = `
 Neuquén es una ciudad y municipio ubicada en la Patagonia argentina. Administrativamente, es la capital de la provincia del Neuquén y cabecera del departamento Confluencia. Es la capital de provincia más joven del país, ​ y desde 1991, la ciudad más poblada de la Patagonia argentina
 Neuquén es una ciudad y municipio ubicada en la Patagonia argentina. Administrativamente, es la capital de la provincia del Neuquén y cabecera del departamento Confluencia. Es la capital de provincia más joven del país, ​ y desde 1991, la ciudad más poblada de la Patagonia argentina
 Neuquén es una ciudad y municipio ubicada en la Patagonia argentina. Administrativamente, es la capital de la provincia del Neuquén y cabecera del departamento Confluencia. Es la capital de provincia más joven del país, ​ y desde 1991, la ciudad más poblada de la Patagonia argentina
 Neuquén es una ciudad y municipio ubicada en la Patagonia argentina. Administrativamente, es la capital de la provincia del Neuquén y cabecera del departamento Confluencia. Es la capital de provincia más joven del país, ​ y desde 1991, la ciudad más poblada de la Patagonia argentina
 Neuquén es una ciudad y municipio ubicada en la Patagonia argentina. Administrativamente, es la capital de la provincia del Neuquén y cabecera del departamento Confluencia. Es la capital de provincia más joven del país, ​ y desde 1991, la ciudad más poblada de la Patagonia argentina
 `

 const image = document.createElement("img");
 image.src = odinImage;

 content.appendChild(h)
 content.appendChild(p)
 content.appendChild(image)
 content.appendChild(pdos)
}
