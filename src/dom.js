import {appState} from "./logic.js"

export {domApp}

const domApp = {
  divProyects : document.getElementById("project-container"),
  divTask : document.getElementById("task-container"),
  summitProject : document.getElementById("submit-project"),
  formProject : document.getElementById("form-Project"),
  
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
    //(projectId, title, date, priority)
    const taskForm = document.createElement("form");

    const formSummit = document.createElement("button")
    formSummit.setAttribute("type", "summit")
    formSummit.textContent = "add Tasks"
      

    const titlediv = document.createElement("div")
    const titlelabel = document.createElement("label")
      titlelabel.textContent = "Title: "
      titlelabel.setAttribute('for', 'title');
    const titleinput = document.createElement("input");
      titleinput.setAttribute("id", "title");


    const datediv = document.createElement("div");
    const datelabel = document.createElement("label");
     datelabel.textContent = "Date: "
     datelabel.setAttribute('for', 'date');
    const dateinput = document.createElement("input");
     dateinput.setAttribute("id", "date");

    
    const prioritydiv = document.createElement("div")
    const prioritylabel = document.createElement("label")
      prioritylabel.textContent = "Priority: "
      prioritylabel.setAttribute('for', 'priority');
    const priorityinput = document.createElement("input")
      priorityinput.setAttribute("id", "priority");

      this.divTask.appendChild(taskForm)
    
      taskForm.appendChild(titlediv)
      titlediv.appendChild(titlelabel)
      titlediv.appendChild(titleinput)

      taskForm.appendChild(datediv)
      datediv.appendChild(datelabel)
      datediv.appendChild(dateinput)

      taskForm.appendChild(prioritydiv)
      prioritydiv.appendChild(prioritylabel)
      prioritydiv.appendChild(priorityinput)

      taskForm.appendChild(formSummit)
      //accion button Fin
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
      console.log("click en submit");
      const newProyect = document.getElementById("project-name").value;
      console.log(newProyect);
      appState.addProject(newProyect);
      this.printProject();
      //
      this.formProject.reset()
    })
  }
}