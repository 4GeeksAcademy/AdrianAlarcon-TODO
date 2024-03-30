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
    listaTareas.innerHTML += `<li>${tarea}</li>`;
  });
  document.get;
  let tareaIndependiente = document.querySelectorAll("li");
  tareaIndependiente.forEach(LI =>
    LI.addEventListener("click", e => {
      LI.parentNode.removeChild(LI);
    })
  );
});
