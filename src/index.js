// /src/index.js
import "./styles.css";
import {appState} from "./logic.js"

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
//visualizo proyectos
console.table(appState.projects)
//borro proyecto perro
appState.deleteProject(miPerro.id)
//visualizo proyectos
console.table(appState.projects)


