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
  const arraystodos = [];

  function addtodo (titulo, fecha, prioridad, proyectoid) {
    arraystodos.push(new Tarea(titulo, fecha, prioridad, proyectoid))
  }

  function showarray () {
    console.table(arraystodos)
  }

  function indiceID (id) {
    const indice = arraystodos.findIndex(todo => todo.proyectoid === id);
      console.log(indice)
  }

  function settodo (indice) {
    console.log("actual " + arraystodos[indice].titulo)
    arraystodos[indice].titulo = "gatobotas"
    console.log("nuevo " + arraystodos[indice].titulo)
    console.log(arraystodos[indice])
  }

  function eliminarTodo (indice) {
    arraystodos.splice(indice,1)
    console.log("corte-----------")
  }
  // funciones compartidas
  return {
    addtodo,
    showarray,
    indiceID,
    settodo,
    eliminarTodo
  }
  //fin IFFE  
}) ();