import {appState} from "./logic.js"

export {domApp}

const domApp = {
  divProyects : document.getElementById("project-container"),
  divTask : document.getElementById("task-container"),
  
  printProject() {
    this.divProyects.innerHTML = ""
    appState.projects.forEach(element => {
      const btmProject = document.createElement("button");
      btmProject.innerHTML = `${element.name}`;
      btmProject.dataset.id = element.id;
      this.divProyects.appendChild(btmProject)
      //click
      btmProject.addEventListener("click", e => {
        this.printTask(btmProject.dataset.id)
      })
    
    });
  },
  
  printTask(idproyect){
    this.divTask.innerHTML = "";
    // cambiamos de filter a find
    //filter
    // const objProyect = appState.projects.filter(element => element.id === idproyect)[0]
    //find
    const objProyect = appState.projects.find(element => element.id === idproyect)
    console.log(objProyect) // me devuelve el objeto y no el array con un solo objeto. Saco el [0]

    // obtengo el array de tareas que tengo en el proyecto con id.
    const arrayTasks = objProyect.tasks;
    // cree lista ordenaday titulo
    const listol = document.createElement("ol");
    const titlelist = document.createElement("h3")
    titlelist.innerHTML = `${objProyect.name}`

    this.divTask.appendChild(titlelist)
    this.divTask.appendChild(listol);

    arrayTasks.forEach(element=>{
      const itemlist = document.createElement("li")
      // console.log("elemento: ")
      // console.log(element)
      itemlist.innerHTML = `title: ${element.title} -Date: ${element.date} -Priority ${element.priority} -Completed: ${element.completed}`
      listol.appendChild(itemlist)
    })
  }
}