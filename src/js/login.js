import alertaRedireccion from "../utils/funciones";

let usuarios = [
  {
    correo: "correo@correo.com",
    contrasena: "123456",
    nombre: "Jaime Zapata",
    id: 1,
  },
  {
    correo: "admin@correo.com",
    contrasena: "123456",
    nombre: "Alejandra Carmona",
    id: 2,
  },
];

localStorage.setItem("usuarios", JSON.stringify(usuarios));

function buscarUsuario() {
  let correo = document.getElementById("correo").value;
  let contrasena = document.querySelector("#contrasena").value;
  let usuarioEncontrado = usuarios.find(
    (item) => correo == item.correo && contrasena == item.contrasena
  );

  return usuarioEncontrado;
}

function iniciarSesion() {
  if (buscarUsuario()) {
    alertaRedireccion(
      "Bienvenido",
      "Será redireccionado en unos segundos",
      1000,
      "success"
    );
  }
}
