# 📝 NoteUI
### _Tu interfaz simple para ideas abiertas_

## 1. Definición de la Aplicación

**NoteUI** es una aplicación web desarrollada con HTML, CSS y JavaScript "puro: guiño, guiño", que permite a los usuarios registrarse e iniciar sesión utilizando un nombre de usuario y una contraseña. El objetivo es brindar una plataforma sencilla, visualmente amigable y abierta, para escribir, guardar y visualizar notas públicas.

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
- **Google Fonts / Iconos** – Para mejorar la presentación visual.

---

# 📅 Cronograma de Desarrollo – Proyecto NoteUI

Este cronograma está diseñado para guiar el desarrollo de la aplicación **NoteUI** durante 6 o 7 sesiones de clase (una por semana), con una duración aproximada de **2 horas y media por jornada**. El proyecto está pensado para estudiantes que están iniciando su aprendizaje en JavaScript, por lo que cada sesión avanza de forma progresiva, integrando HTML, CSS y lógica básica con JavaScript.

---


## 🧠 Saberes previos

- Conocimiento básico de HTML, CSS.
- Logica básica de JavaScript (condicionales, bucles, funciones) 
- Conocimiento básico de Git y GitHub.
- Conocimiento básico de la estructura de carpetas y archivos.


---

## 🧠 Objetivo General

Desarrollar una aplicación web funcional en la que los usuarios puedan registrarse, iniciar sesión y visualizar todas las notas creadas por cualquier usuario. Todo esto utilizando únicamente HTML, CSS y JavaScript, y almacenando los datos localmente con `localStorage`.

---

## 📌 Cronograma por Semana

### ✅ Semana 1: Introducción y estructura base
- Presentación del proyecto NoteUI.
- Definición de encarpetado y estructura del proyecto
- Creación del archivo `index.html`, `style.css` y `main.js`.
- Maquetación inicial: formularios de registro e inicio de sesión.
- Introducción a `addEventListener`, `querySelector`, `value`.

### ✅ Semana 2: Registro y login con localStorage
- Guardar usuarios en `localStorage` (como objetos dentro de un arreglo).
- Validación básica para evitar usuarios repetidos.
- Lógica para verificar usuario y contraseña en el login.
- Mostrar errores en pantalla si los datos no coinciden.

### ✅ Semana 3: Crear nota y guardar en localStorage
- Crear formulario para nuevas notas (título y contenido).
- Asociar notas a un nombre de usuario.
- Guardar las notas como arreglo de objetos dentro de `localStorage`.
- Introducción al uso de `JSON.stringify` y `JSON.parse`.

### ✅ Semana 4: Mostrar notas en pantalla
- Leer todas las notas guardadas y mostrarlas en pantalla.
- Crear tarjetas o bloques de notas con `innerHTML`.
- Mostrar el nombre del autor en cada nota.
- Introducción al renderizado dinámico del DOM.

### ✅ Semana 5: Editar y eliminar notas
- Añadir botones para editar y eliminar cada nota.
- Detectar qué nota fue clickeada usando `data-id` o índices.
- Actualizar o eliminar el objeto correspondiente del arreglo de notas.
- Re-renderizar notas después de cada acción.

### ✅ Semana 6: Estilización y mejoras visuales
- Aplicar estilos con CSS: tipografía, colores, espaciados.
- Uso opcional de iconos con Google Fonts o Font Awesome.
- Crear una experiencia de usuario más intuitiva.
- Ajustes visuales para mejorar la estructura general.

### 🆓 Semana 7 (opcional): Repaso, mejoras y validaciones
- Validar campos vacíos o inputs incorrectos.
- Agregar funcionalidad de “cerrar sesión”.
- Documentar el código con comentarios.
- Resolver errores frecuentes y repasar conceptos clave.

---

> ⚠️ Nota: Este sistema es de uso educativo y no aplica medidas de seguridad como cifrado de contraseñas ni control de permisos. Las notas son públicas entre usuarios dentro del mismo navegador.
