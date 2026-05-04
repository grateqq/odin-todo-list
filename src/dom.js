import {appState} from "./logic.js"

export {domApp}

const domApp = {
  divProyects : document.getElementById("project-container"),
  divTask : document.getElementById("task-container"),
  summitProject : document.getElementById("submit-project"),
  formProject : document.getElementById("form-Project"),
  
  initapp() {
    this.printProject();
    this.BtnfromProyect();
  },

  printProject() {
    this.divProyects.innerHTML = ""
    appState.projects.forEach(element => {
      const newBtonHTML = `
      <button class="btn-Project" data-id="${element.id}">${element.name}</button>
      `;
      this.divProyects.insertAdjacentHTML("beforeend",newBtonHTML)
      
    
    });
    this.divProyects.addEventListener("click", e => {
      this.printTask(e.target.dataset.id)
    })  
     
  },
  
  printTask(idproyect){
    this.divTask.innerHTML = "";
    // cambiamos de filter a find
    //filter
    // const objProyect = appState.projects.filter(element => element.id === idproyect)[0]
    //find
    const objProyect = appState.projects.find(element => element.id === idproyect)
    // me devuelve el objeto y no el array con un solo objeto. Saco el [0]
    //console.log(objProyect) 

    // obtengo el array de tareas que tengo en el proyecto con id.
    const arrayTasks = objProyect.tasks;
    // cree lista ordenaday titulo
    const listol = document.createElement("ol");
    const titlelist = document.createElement("h3")
    titlelist.innerHTML = `${objProyect.name}`
    // creo boton para agregar tareas.
    const btnAddTarea = document.createElement("button");
    btnAddTarea.innerText = `Agregar tarea`
    btnAddTarea.dataset.id = idproyect

    this.divTask.appendChild(titlelist);
    this.divTask.appendChild(btnAddTarea);
    this.divTask.appendChild(listol);

    arrayTasks.forEach(element=>{
      const itemlist = document.createElement("li")
      // console.log("elemento: ")
      // console.log(element)
      itemlist.innerHTML = `title: ${element.title} -Date: ${element.date} -Priority ${element.priority} -Completed: ${element.completed}`
      listol.appendChild(itemlist)
    })

    //agrego funcion al boton agregar tarea
    btnAddTarea.addEventListener("click", e=>{
      // console.log("click en boton agregar tarea")
      const idproy = btnAddTarea.dataset.id
      // console.log(idproy)
      // appState.addTaskToProject(idproy, "gato", 6, 4)
      this.printTask(idproy)
      this.showCreateForm(idproy)
    })

    

  },
  //creo formulario
  showCreateForm(idproyect) { 
 
    const formHTML = `
        <form id="task-form">
          <div>
            <label for="title">Title:</label>
            <input id="title" type="text">
          </div>
          <div>
            <label for="date">Date: </label>
            <input id="date" type="text">
          </div>
          <div>
            <label for="priority">Priority: </label>
            <input id="priority" type="text">
          </div>

          <button id="btn-submit" type="submit">Add Task</button>
        </form>
      `;

    //(projectId, title, date, priority)
      this.divTask.insertAdjacentHTML("afterbegin",formHTML)

      //accion button Fin
      const formSummit = document.getElementById("btn-submit") 
      formSummit.addEventListener("click", e => {
        e.preventDefault();
        //(projectId, title, date, priority)
        appState.addTaskToProject(
          idproyect,
          document.getElementById("title").value,
          document.getElementById("date").value,
          document.getElementById("priority").value,
        )
        this.printTask(idproyect)
      })
       //accion button Fin
  },

  BtnfromProyect(){
    this.summitProject.addEventListener("click", e =>{
      e.preventDefault()
      //test de lo que necesito
      const newProyect = document.getElementById("project-name").value;
      console.log(newProyect);
      appState.addProject(newProyect);
      this.printProject();
      //
      
    })
  }
}