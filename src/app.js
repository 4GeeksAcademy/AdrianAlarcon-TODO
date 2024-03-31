/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let listaTareas = document.querySelector("ul");
let counter = 0;
let tareas = [];

// Listener para cuadno le damos click a añadir nueva tarea
document.getElementById("agregarTarea").addEventListener("click", e => {
  // Cogemos el valor del input
  let nuevaTarea = document.getElementById("introducirTarea").value;
  // Subimos el valor al array
  tareas.push(nuevaTarea);
  // Borramos el contenido del input
  document.getElementById("introducirTarea").value = "";

  // Llamamos la funcion de renderizar
  renderizarTareas();
  ContarTareas("suma");
});

// Funcion window hace que sea global para toda la pagina
window.borrarTarea = function() {
  // Con el click lo que hacemos es declarar el padre del elemento que estemos pulsando
  let liPadre = event.target.previousSibling.textContent;
  // Establecemos una variable para identificar el indice de la tarea qeu queremos borrar
  let i = tareas.indexOf(liPadre);
  // Borramos dicha tarea del array
  tareas.splice(i, 1);
  // Llamamos la funcion renderizar
  renderizarTareas();
  ContarTareas("resta");
};

// La funcion renderizar basicamente lo que hace es recargar la lista de ul en base al array de tareas
function renderizarTareas() {
  // Limpiamos el contenido de la listaTareas
  listaTareas.innerHTML = "";
  // Por cada elemento en el array de tareas, creamos un elemento li con un texto y un <i> dentro que contiene el onlcick de la funcion borrar
  tareas.forEach((tarea, i) => {
    listaTareas.innerHTML += `<li>${tarea}<i class="fa-solid fa-xmark" onclick="borrarTarea(${i})" style="color: #ff3300;"></i></li>`;
  });
}

window.ContarTareas = function(tipo) {
  if (tipo == "suma") {
    counter++;
  } else if (tipo == "resta") {
    counter--;
  }
  document.getElementById("counterTasks").innerHTML = `${counter} items left`;
  comprobarTaras();
};

window.comprobarTaras = function() {
  if (counter == 0) {
    document.getElementById("counterTasks").innerHTML = `No tasks, add a task`;
  }
};

window.onload = renderizarTareas();
window.onload = comprobarTaras();
