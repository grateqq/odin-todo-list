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
 appState.loadData()
if (appState.projects.length === 0) {
    const miGato = appState.addProject("Gato");
    const miPerro = appState.addProject("Perro");
    const miLoro = appState.addProject("Loro");
    const miChancho = appState.addProject("Chancho");

    appState.addTaskToProject(miGato.id, "alimentar", "2024-05-15", "alta");
    appState.addTaskToProject(miGato.id, "ronronear", "2024-05-16", "media");
    appState.addTaskToProject(miGato.id, "arañar", "2024-05-17", "baja");

    appState.addTaskToProject(miPerro.id, "pasear", "2024-05-15", "alta");
    appState.addTaskToProject(miPerro.id, "ladrar", "2024-05-16", "media");
    appState.addTaskToProject(miPerro.id, "morder", "2024-05-17", "baja");

    appState.addTaskToProject(miLoro.id, "piar", "2024-05-15", "media");
    appState.addTaskToProject(miLoro.id, "bandada", "2024-05-16", "baja");

    appState.addTaskToProject(miChancho.id, "cerdo", "2024-05-15", "baja");
    appState.addTaskToProject(miChancho.id, "rodar", "2024-05-16", "media");
}


//visualizo proyectos
// console.table(appState.projects)
// visualizar tareas
// console.table(appState.projects[0].tasks)
// console.table(appState.projects[1].tasks)
// console.table(appState.projects[2].tasks)
// console.table(appState.projects[3].tasks)

// visualizar tareas segun id



//---DOM
//Visualizo las proyectos y no se repiten si cargo doble
domApp.initapp()
// domApp.BtnfromProyect()


// Visualizar tareas de un proyecto. (idproyecto)
// domApp.printTask(miGato.id)
// domApp.printTask(miPerro.id)
// console.table(domApp.printTask(miGato.id))
// console.log(typeof(domApp.printTask(miGato.id)))

