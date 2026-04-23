// src/navbtns.js
import {printhome} from "./home.js";
import {printmenu} from "./menu.js";
import {printcontact} from "./contact.js";

//refactprozar
const navinteractivo =(()=>{
  const content = document.getElementById("content");


  const acciones = {
    home: printhome,
    menu: printmenu,
    contacto: printcontact
  };

  function render(callback) {
    content.innerHTML = ``;
    callback()
  };


  const navbar = document.getElementById("nav-bar");
    navbar.addEventListener("click", (e)=>{
    //render
      const idbtun = acciones[e.target.dataset.id]
    if (idbtun) {render(idbtun)}
    //add class
    const clickbtn = e.target
    if (clickbtn.tagName === "BUTTON") {
      clearactive()
      clickbtn.classList.add("active")
    }
  })

  const botones = navbar.querySelectorAll('.btnnav');
  function clearactive() {
    botones.forEach(boton => {
      boton.classList.remove('active');
    })
  }

  render(printhome) // Si funciona.
  
})();


