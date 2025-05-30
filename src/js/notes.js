import { guardarLocalStorage, alertGeneral } from "../utils/funciones.js";
let notas = [];

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
    h2.textContent = nota.titulo;
    p1.textContent = "Fecha " + nota.fecha;
    p2.textContent = "Descripción " + nota.descripcion;
    div.classList.add("card");
    div.append(h2, p1, p2);
    listadoNotas.appendChild(div);
  });
}
