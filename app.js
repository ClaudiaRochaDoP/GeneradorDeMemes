/* -----------------------CAPTURA DE ELEMENTOS ---------------------*/

/*---Botones Header y Captura de Secciones---*/

const botonTexto = document.getElementById("boton-texto");
const botonImagen = document.getElementById("boton-imagen");
// const botonModoOscuro = document.getElementById("boton-modo-oscuro");
const seccionTexto = document.getElementById("seccion-texto");
const seccionImagen = document.getElementById("seccion-imagen");
const claseOculto = document.querySelector(".oculto");
const headerTag = document.getElementsByTagName("header");

/*---  Elementos Modo Oscuro y Modo Claro  ---*/

const modoOscuro = document.querySelector(".modo-oscuro");
const modoClaro = document.querySelector(".modo-claro");
const body = document.getElementById("body");
const botonModoOscuro = document.getElementById("boton-modo-oscuro");
const botonModoClaro = document.getElementById("boton-modo-claro");

/*---  Elementos input URL  ---*/

const inputUrl = document.getElementById("input-url");
const imagenMeme = document.getElementById("img-meme");

/*---  Elementos Color  ---*/

/* -----------------------  FUNCIONES ---------------------*/

/* ----  Funciones Botones Header ------ */

botonTexto.addEventListener("click", function () {
  seccionTexto.style.display = "block";
  seccionImagen.style.display = "none";
});

botonImagen.addEventListener("click", function () {
  seccionTexto.style.display = "none";
  seccionImagen.style.display = "block";
});

/* ----  Funciones Modo Oscuro y Modo Claro  ------ */

function modoClaroOn() {
  body.classList.add("modo-claro");
  body.classList.remove("modo-oscuro");
  botonModoClaro.classList.add("hidden");
  botonModoOscuro.classList.remove("hidden");
}
botonModoClaro.addEventListener("click", modoClaroOn);

function modoOscuroOn() {
  body.classList.remove("modo-claro");
  body.classList.add("modo-oscuro");
  botonModoClaro.classList.remove("hidden");
  botonModoOscuro.classList.add("hidden");
}
botonModoOscuro.addEventListener("click", modoOscuroOn);

/* ----  Funciones Formulario Imagen ------- */

// Función Imagen - URL

inputUrl.oninput = () => {
  imagenMeme.src = inputUrl.value;
};
