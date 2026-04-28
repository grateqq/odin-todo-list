//todoManager.js
// Export
export {todoManager}
// crear objetos todos
class Tarea {
  constructor(titulo, fecha, prioridad, proyectoid) {
    this.titulo = titulo;
    this.fecha = fecha;
    this.prioridad = prioridad;
    this.proyectoid = proyectoid;
  }
}
// donde se almacen las todos

const todoManager = (()=>{
  // inicio iffe
  const dataTodo = [];


  function addtodo (titulo, fecha, prioridad, proyectoid) {
    dataTodo.push(new Tarea(titulo, fecha, prioridad, proyectoid))
  }

  function idsProyects () {
    const ids = dataTodo.map(tarea => tarea.proyectoid);
    // console.table(ids);
    const set = new Set(ids);
    // console.log(set);
    const arrayidProyect = [...set]
    // console.log(arrayidProyect)
    return  console.log(arrayidProyect)
  }

  function filtrarPorProyecto(proyectoid) {
    return dataTodo.filter(tarea => tarea.proyectoid === proyectoid);
    //segun un id me da todos los todos con ese id
  }

  

  function showarray () {
    console.table(dataTodo)
  }

  function indiceID (id) {
    const indice = dataTodo.findIndex(todo => todo.proyectoid === id);
      console.log(indice)
  }

  function settodo (indice) {
    console.log("actual " + dataTodo[indice].titulo)
    dataTodo[indice].titulo = "gatobotas"
    console.log("nuevo " + dataTodo[indice].titulo)
    console.log(dataTodo[indice])
  }

  function eliminarTodo (indice) {
    dataTodo.splice(indice,1)
    console.log("corte-----------")
  }
  function eleminarID (id) {
    eliminarTodo (indiceID(id))
  }
  
  // funciones compartidas
  return {
    addtodo,
    showarray,
    indiceID,
    settodo,
    eliminarTodo,
    eleminarID,
    dataTodo,
    idsProyects,
    filtrarPorProyecto

  }
  //fin IFFE  
})();