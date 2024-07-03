/* -----------------------CAPTURA DE ELEMENTOS ---------------------*/

/*---Botones Header y Captura de Secciones---*/

const botonTexto = document.getElementById("boton-texto");
const botonImagen = document.getElementById("boton-imagen");
const botonModoOscuro = document.getElementById("boton-modo-oscuro");
const seccionTexto = document.getElementById("seccion-texto");
const seccionImagen = document.getElementById("seccion-imagen");
const claseOculto = document.querySelector(".oculto");
const headerTag = document.getElementsByTagName("header");
const modoOscuro = document.querySelector(".modo-oscuro");
const modoClaro = document.querySelector(".modo-claro");

/*---  Elementos input URL  ---*/

const inputUrl = document.getElementById("input-url");
const imagenMeme = document.getElementById("img-meme");

/*---  Elementos Color  ---*/

const 

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

botonModoOscuro.addEventListener("click", function () {
  // modoOscuro.classList.toggle(".modo-claro");
  // modoClaro.classList.toggle(".modo-oscuro");
  // // modoOscuro.classList.replace(".modo-oscuro", ".modo-claro");
  modoOscuro.classList.toggle("modo-claro");
  modoOscuro.classList.toggle("modo-oscuro");
});

/* ----  Funciones Formulario Imagen ------ */

inputUrl.oninput = () => {
  imagenMeme.src = inputUrl.value;
};
