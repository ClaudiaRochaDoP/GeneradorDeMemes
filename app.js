/* -----------------------CAPTURA DE ELEMENTOS ---------------------*/

/*---Botones Header y Captura de Secciones---*/

const botonTexto = document.getElementById("boton-texto");
const botonImagen = document.getElementById("boton-imagen");
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

// funcion escoger color

// Función seleccion color fondo

const inputColorFondo = document.getElementById("input-color-fondo");
const selectModo = document.getElementById("select-modo");
const contenedorMeme = document.getElementById("contenedor-meme");
const contenedorImagen = document.getElementById("contenedor-imagen");
const contenedorEditor = document.getElementById("contenedor-editor");

function seleccionFondo() {
  contenedorMeme.style.backgroundColor = inputColorFondo.value;
}

inputColorFondo.addEventListener("click", seleccionFondo);

selectModo.addEventListener("click", function () {
  if (selectModo.value === "ninguno") {
    contenedorMeme.style.backgroundBlendMode = "normal";
  }
  if (selectModo.value === "aclarar") {
    contenedorMeme.style.backgroundBlendMode = "aclarar";
  }
  if (selectModo.value === "oscurecer") {
    contenedorMeme.style.backgroundBlendMode = "oscurecer";
  }
  if (selectModo.value === "diferencia") {
    contenedorMeme.style.backgroundBlendMode = "difference";
  }
  if (selectModo.value === "luminosidad") {
    contenedorMeme.style.backgroundBlendMode = "luminosidad";
  }
  if (selectModo.value === "multiplicar") {
    contenedorMeme.style.backgroundBlendMode = "multiplicar";
  }
});

// inputColorFondo.addEventListener("input", () => {
//   const inputColorValue = inputColorFondo.value;
//   contenedorMeme.style.backgroundColor = inputColorValue;
// });

// selectModo.onchage = () => {
//   const selectModoValue = selectModo.value;
//   contenedorMeme.style.backgroundBlendMode = selectModoValue;
// };
