// /src/index.js
import "./styles.css";
import {todoManager} from "./todoManager.js"
import {domManager} from "./domInit.js"
import {domProyect} from "./domProyect.js"
import {dataproyects, newProyect} from "./dataProyect.js"
import {newTarea, dataTarea,tareaforid} from "./dataTarea.js"
// console.log("hola")




// console.clear()
console.log("todoList Inicio")

todoManager.addtodo("Laborarorio", 20, "alta", 2026)
todoManager.addtodo ("caca", 11, "baja", 2026)
todoManager.addtodo("perra", 22, "media", 2500)
todoManager.addtodo(undefined,undefined,undefined,2025)



newProyect("gato")
newProyect("perro")
newProyect("casa")
console.log(dataproyects)
//gato
newTarea("alimientar",5,"alta",dataproyects[0].idProyect)
newTarea("bañar",5,"baja",dataproyects[0].idProyect)
//perro
newTarea("alimientar",5,"alta",dataproyects[1].idProyect)
newTarea("peluqueria",5,"baja",dataproyects[1].idProyect)
//gato 
newTarea("castrar",2,"baja",dataproyects[0].idProyect)
//casa
newTarea("pasto",4,"alta",dataproyects[2].idProyect)
newTarea("vidrios",2,"baja",dataproyects[2].idProyect)
console.log(dataTarea)
//tareas por id
tareaforid(dataTarea,dataproyects[0].idProyect)
tareaforid(dataTarea,dataproyects[1].idProyect)
tareaforid(dataTarea,dataproyects[2].idProyect)

domProyect(dataproyects)

