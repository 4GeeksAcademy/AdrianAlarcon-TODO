/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

let listaTareas = document.querySelector("ul");

let tareas = [];

document.getElementById("agregarTarea").addEventListener("click", e => {
  let nuevaTarea = document.getElementById("introducirTarea").value;
  tareas = [];
  tareas.push(nuevaTarea);
  document.getElementById("introducirTarea").value = "";
  tareas.map(tarea => {
    listaTareas.innerHTML += `<li>${tarea}<i class="fa-solid fa-xmark" id="${tareas[tarea]}" style="color: #ff3300;"></i></li>`;
  });
  let tareaIndependiente = document.querySelectorAll("i");
  tareaIndependiente.forEach(icono =>
    icono.addEventListener("click", e => {
      let liPadre = icono.parentNode;
      liPadre.parentNode.removeChild(liPadre);
    })
  );
});
