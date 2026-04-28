export {newTarea, dataTarea,tareaforid}

class Tarea {
  constructor(titulo, fecha, prioridad, proyectoid) {
    this.titulo = titulo;
    this.fecha = fecha;
    this.prioridad = prioridad;
    this.proyectoid = proyectoid;
    this.tareaid = crypto.randomUUID();
  }
}

const dataTarea = [];
const copyTarea = dataTarea
function newTarea (titulo, fecha, prioridad, proyectoid) {
    dataTarea.push(new Tarea(titulo, fecha, prioridad, proyectoid))
}

//con un idproyecto, objetener, todos las tareas y ordenarlas por prioridad-
function tareaforid(array, idp) {
  // console.log(array)
  // console.log(array[1].proyectoid)
  // console.log(idp)
  console.log(array.filter(tarea => tarea.proyectoid === idp))
  return array.filter(tarea => tarea.proyectoid === idp)
}