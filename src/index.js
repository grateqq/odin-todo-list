// /src/index.js
import "./styles.css";
import {appState} from "./logic.js"
import {domApp} from "./dom.js"

// console.clear()
// appState.addProject("gato")
// console.table(appState.projects)
// console.log(appState.projects[0].id)
// appState.addTaskToProject(appState.projects[0].id, "alimetar", 1, 9)
// console.table(appState.projects)

console.clear()
//agrego proyectos

const miGato = appState.addProject("Gato");
const miPerro = appState.addProject("Perro");
const miLoro = appState.addProject("Loro");
const miChancho = appState.addProject("Chancho");

appState.addTaskToProject(miGato.id,"alimentar",5,6)
appState.addTaskToProject(miGato.id,"ronronear",5,6)
appState.addTaskToProject(miGato.id,"arañar",5,6)
appState.addTaskToProject(miGato.id,"piedras",5,6)

appState.addTaskToProject(miPerro.id,"pasear",5,6)
appState.addTaskToProject(miPerro.id,"ladrar",5,6)
appState.addTaskToProject(miPerro.id,"morder",5,6)
appState.addTaskToProject(miPerro.id,"dog",5,6)

appState.addTaskToProject(miLoro.id,"piar",5,6)
appState.addTaskToProject(miLoro.id,"bandada",5,6)
appState.addTaskToProject(miLoro.id,"plumar",5,6)

appState.addTaskToProject(miChancho.id,"cerdo",5,6)
appState.addTaskToProject(miChancho.id,"rodar",5,6)
appState.addTaskToProject(miChancho.id,"gordo",5,6)


//visualizo proyectos
console.table(appState.projects)
// visualizar tareas
// console.table(appState.projects[0].tasks)
// console.table(appState.projects[1].tasks)
// console.table(appState.projects[2].tasks)
// console.table(appState.projects[3].tasks)

// visualizar tareas segun id



//---DOM
//Visualizo las proyectos y no se repiten si cargo doble
domApp.printProject()
domApp.printProject()

// Visualizar tareas de un proyecto. (idproyecto)
domApp.printTask(miGato.id)
domApp.printTask(miPerro.id)
// console.table(domApp.printTask(miGato.id))
// console.log(typeof(domApp.printTask(miGato.id)))

