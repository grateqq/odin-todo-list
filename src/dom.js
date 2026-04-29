import {appState} from "./logic.js"

export {domApp}

const domApp = {
  divProyects : document.getElementById("project-container"),
  printProject() {
    this.divProyects.innerHTML = ""
    appState.projects.forEach(element => {
      const btmProject = document.createElement("button");
      btmProject.innerHTML = `${element.name}`;
      this.divProyects.appendChild(btmProject)
      
    });
  }
}