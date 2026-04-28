// //container
// export {domManager}

// import {todoManager} from "./todoManager.js"

// const domManager = (()=>{
//   const container = document.getElementById("container");
//   container.classList.add("container")
//   const divtodo = document.createElement("div");
//   divtodo.classList.add("todocontainer");
//   container.appendChild(divtodo);

//   const divproyect = document.createElement("div")
//   divproyect.classList.add("proyectcontainer");
//   divproyect.innerText = "soy un proyecto"
//   container.prepend(divproyect);

//   function printProyect (array) {
//     divproyect.innerHTML = "";
//     array.forEach((item)=>{
//       console.log(item.proyectoid);
      

//     }) 
//   }






//   function printTodos (array) {
//     divtodo.innerHTML=""
//     array.forEach((item)=>{
//       console.log(item);
//       console.log(item.titulo)
//       //crear  
//       const ptodo = document.createElement("p")
//       ptodo.innerText = `${item.titulo} `
//       divtodo.appendChild(ptodo)
      
//       const buttondelete = document.createElement("button")
//       buttondelete.innerHTML = "X"
//       buttondelete.dataset.idProyect = `${item.proyectoid}`
//       buttondelete.classList.add("btn-delete")
//       ptodo.appendChild(buttondelete);
//     })
    
//     const bttnsdelete = document.querySelectorAll(".btn-delete")
//     bttnsdelete.forEach(function(button){
//     button.addEventListener("click", function(e) {
//       // console.log("clcik en boton")
//       console.log(button.dataset.idProyect)
//       todoManager.eleminarID(button.dataset.idProyect)
//       printTodos(todoManager.arraystodos)
  
//     })
//   })

//   }

  
  

//   function sayhi (array) {
//     console.log("hola Soy dom JS");
//     console.log(array);
//   }
  
  
  
//   // const divtodo = document.createElement("div")
//   // divtodo.innerHTML = "hola"
//   // container.appendChild(divtodo)
  
//   function newTodo () {
//    console.log("soy doom page")
//   }



//   return {
//       sayhi, 
//       printTodos, 
//       newTodo,
//       printProyect
//     } 
// // fin IFFE
// })();