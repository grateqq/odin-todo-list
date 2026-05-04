// logic.js
export {appState}

const appState = {
  projects: [], 
    
  addProject(name) {
    const project = {
      name,
      id: crypto.randomUUID(),
      tasks: [] // <--- LAS TAREAS VIVEN AQUÍ ADENTRO
    };
    this.projects.push(project);
    this.savedata()
    return project;
  },

  addTaskToProject(projectId, title, date, priority) {
    const project = this.projects.find(p => p.id === projectId);
    if (project) {
      const newTask = {
        title,
        date,
        priority,
        id: crypto.randomUUID(),
        completed: false
      };
      project.tasks.push(newTask);
       this.savedata()
    }
    
  },
   
  deleteProject(id) {
    const result = this.projects.filter(proj => proj.id !== id);   
    this.projects = result;
    this.savedata()
  },

  savedata() {
    const dataJSON = JSON.stringify(this.projects);
     localStorage.setItem('projects', dataJSON);
  },

 loadData() {
    const dataJSON = localStorage.getItem('projects');
    if (dataJSON) {
        this.projects = JSON.parse(dataJSON);
    }
    return this.projects;
}


  
};