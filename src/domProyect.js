import {dataproyects} from "./dataProyect.js"
export {domProyect}

const proyectContainer = document.getElementById("proyect-container")

function domProyect (array) {
  array.forEach(element => {
    const proyectbtn = document.createElement("button")
    proyectbtn.innerHTML = `${element.name}` 
    proyectContainer.appendChild(proyectbtn)
  });
}



//se ejecuta al inicio, pineso que una funcion sera mejor 
// y mas ya que se ejecuta cada vez que se hace clic
// const domProyect = (()=>{
//   console.log("hola");
//   console.log(dataproyects);

// })();

