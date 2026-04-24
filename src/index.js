// /src/index.js
import {todoManager} from "./todoManager.js"
console.log("hola")




console.clear()
todoManager.addtodo("Laborarorio", 20, "alta", "2023")
todoManager.addtodo ("caca", 11, "baja", "8789")
todoManager.addtodo("perra", 22, "media", "2500")
todoManager.showarray () 

todoManager.indiceID ("8789") // 1
todoManager.settodo (1) //funciona
todoManager.showarray () 

todoManager.eliminarTodo (2)// funciona
todoManager.showarray ()