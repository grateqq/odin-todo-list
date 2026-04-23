console.log("hola")
// donde se almacen las todos
const arraystodos = [];

// crear objetos todos
class Tarea {

    constructor(titulo, fecha, prioridad, proyectoid) {
    this.titulo = titulo;
    this.fecha = fecha;
    this.prioridad = prioridad;
    this.proyectoid = proyectoid;
  }
}

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



console.clear()
addtodo("Laborarorio", 20, "alta", "2023")
addtodo ("caca", 11, "baja", "8789")
addtodo("perra", 22, "media", "2500")
showarray () 

// indiceID ("8789") // 1
// settodo (1) //funciona
// showarray () 

// eliminarTodo (2)// funciona
// showarray ()