/*---Botones Header---*/

let botonTexto = document.getElementById("boton-texto");
let botonImagen = document.getElementById("boton-imagen");
let botonModoOscuro = document.getElementById("boton-modo-oscuro");
let seccionTexto = document.getElementById("seccion-texto");
let seccionImagen = document.getElementById("seccion-imagen");
let claseOculto = document.querySelector(".oculto");

botonTexto.addEventListener("click", function () {
  seccionTexto.style.display = "block";
  seccionImagen.style.display = "none";
});

botonImagen.addEventListener("click", function () {
  seccionTexto.style.display = "none";
  seccionImagen.style.display = "block";
});

// // botonModoOscuro =
