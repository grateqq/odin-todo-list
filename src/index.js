// /src/index.js
import "./styles.css";
import {todoManager} from "./todoManager.js"
import {domManager} from "./domInit.js"
console.log("hola")




console.clear()
// console.log("hola soy index.js")
todoManager.addtodo("Laborarorio", 20, "alta", "2026")
todoManager.addtodo ("caca", 11, "baja", "2026")
todoManager.addtodo("perra", 22, "media", "2500")
todoManager.showarray () 
const arrayL = todoManager.arraystodos
// console.log (arrayL)
domManager.sayhi(arrayL)
domManager.printTodos(arrayL)
console.clear()
// todoManager.indiceID ("8789") // 1
// todoManager.settodo (1) //funciona
// todoManager.showarray () 

// todoManager.eliminarTodo (2)// funciona
// todoManager.showarray ()