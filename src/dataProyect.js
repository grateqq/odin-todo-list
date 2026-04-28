export {dataproyects, newProyect}
const dataproyects = []

class Protect {
  constructor (name) {
    this.name = name;
    this.idProyect = crypto.randomUUID()
  }
}

function newProyect (name) {
  dataproyects.push(new Protect(name))
}

