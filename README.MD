# 📝 NoteUI
### _Tu interfaz simple para ideas abiertas_

## 1. Definición de la Aplicación

**NoteUI** es una aplicación web desarrollada con HTML, CSS y JavaScript puro, que permite a los usuarios registrarse e iniciar sesión utilizando un nombre de usuario y una contraseña. El objetivo es brindar una plataforma sencilla, visualmente amigable y abierta, para escribir, guardar y visualizar notas públicas.

Cada vez que un usuario inicia sesión, podrá ver todas las notas creadas por todos los usuarios del sistema. No existe privacidad entre cuentas, lo que convierte esta aplicación en una herramienta colaborativa o de consulta abierta. Todo el contenido se guarda localmente en el navegador utilizando `localStorage`.

Este proyecto tiene fines académicos y está pensado para aprender sobre manipulación del DOM, gestión de datos con arreglos y objetos, diseño de interfaces (UI) y almacenamiento local sin necesidad de un servidor backend.

---

## 🎯 2. Objetivos

- Aprender a construir una aplicación interactiva usando solo HTML, CSS y JavaScript.
- Implementar registro e inicio de sesión con validación de credenciales.
- Usar `localStorage` para guardar usuarios y notas de forma persistente.
- Manipular el DOM para mostrar dinámicamente los datos.
- Crear una interfaz clara y funcional centrada en la experiencia de usuario (UI).

---

## 🚀 3. Alcance (Funcionalidades)

1. **Registro de Usuario**  
   Los usuarios pueden registrarse con un nombre de usuario y contraseña. Esta información se guarda en `localStorage`.

2. **Inicio de Sesión**  
   Los usuarios pueden iniciar sesión con sus credenciales. No hay roles ni privacidad: todos pueden ver todas las notas.

3. **Visualizar Todas las Notas**  
   Al iniciar sesión, se cargan y muestran todas las notas existentes en el sistema, sin importar quién las haya creado.

4. **Crear Nota**  
   Se pueden agregar nuevas notas con título y contenido. Las notas se almacenan en `localStorage` junto con el nombre del autor.

5. **Editar Nota**  
   Las notas pueden ser editadas por cualquier usuario.

6. **Eliminar Nota**  
   Cualquier usuario puede eliminar cualquier nota.

7. **Cerrar Sesión**  
   Finaliza la sesión actual y redirige al formulario de inicio de sesión.

---

## 🛠️ 4. Herramientas a Utilizar

- **HTML5** – Para estructurar la aplicación.
- **CSS3** – Para el diseño visual y experiencia del usuario.
- **JavaScript (Vanilla JS)** – Para toda la lógica del proyecto: registro, login, visualización y manipulación de notas.
- **localStorage** – Para guardar los usuarios y notas localmente sin conexión a un servidor.
- **[Opcional] Google Fonts / Iconos** – Para mejorar la presentación visual.

---

> ⚠️ Nota: Este sistema es de uso educativo y no aplica medidas de seguridad como cifrado de contraseñas ni control de permisos. Las notas son públicas entre usuarios dentro del mismo navegador.
