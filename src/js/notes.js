import { guardarLocalStorage, alertGeneral } from "../utils/funciones.js";

let notas = JSON.parse(localStorage.getItem("notas"));

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (evtn) => {
  evtn.preventDefault();
  let data = Object.fromEntries(new FormData(formulario));
  /* Valiación objeto vacío */
  const camposVacios = Object.values(data).some((llave) => llave.trim() === "");
  if (camposVacios) {
    return alertGeneral("Error", "Todos los campos son obligatorios", "error");
  } else {
    notas.unshift(data);
    guardarLocalStorage("notas", notas);
    mostrarNotas();
    return alertGeneral("Éxito", "Nota guardada correctamente", "success");
  }

  //   let titulo = data.get("titulo");
  //   let descripcion = data.get("descripcion");
  //   let fecha = data.get("fecha");
  //   let tipo = data.get("tipo");
  //   let nota = {
  //     titulo,
  //     descripcion,
  //     fecha,
  //   };
});

function mostrarNotas() {
  const listadoNotas = document.getElementById("cards");
  listadoNotas.innerHTML = "";
  console.log(listadoNotas);
  notas.forEach((nota) => {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let btnEditar = document.createElement("button")
    let btnEliminar = document.createElement("button")
    let buttons = document.createElement("div");
    h2.textContent = nota.titulo;
    p1.textContent = "Fecha " + nota.fecha;
    p2.textContent = "Descripción " + nota.descripcion;
    p3.textContent = "Autor " + JSON.parse(localStorage.getItem("usuario"));
    btnEditar.textContent = "Editar"
    btnEliminar.textContent = "Eliminar"
    buttons.append(btnEditar, btnEliminar)
    div.classList.add("card");
    div.append(h2, p1, p2, p3, buttons);
    listadoNotas.appendChild(div);
  });
}

window.addEventListener("DOMContentLoaded", function () {
  let usuarioLogueado = JSON.parse(localStorage.getItem("usuario"));
  document.getElementById("usuario").textContent = usuarioLogueado;

  let bntCerrarSesion = document.getElementById("bntCerrarSesion");
  bntCerrarSesion.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "/src/pages/login.html";
  });

  mostrarNotas();
});
