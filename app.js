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

/*---  Elementos input URL  ---*/

const inputUrl = document.getElementById("input-url");
const imagenMeme = document.getElementById("img-meme");

// Función Imagen - URL

// forma 1
inputUrl.oninput = () => {
  imagenMeme.src = inputUrl.value;
};

// Función Seleccion Color y Modos de fusion

const textoColorlabel = document.getElementById("fondo-color-label");

const inputColorFondo = document.getElementById("input-color-fondo");
const selectModo = document.getElementById("select-modo");
const contenedorMeme = document.getElementById("contenedor-meme");
const contenedorImagen = document.getElementById("contenedor-imagen");
const contenedorEditor = document.getElementById("contenedor-editor");
const colorModoFusion = document.getElementById("color-modofusion");
const colorHex = document.getElementById("color-hex-fondo");

inputColorFondo.addEventListener("input", function () {
  const seleColor = inputColorFondo.value;
  contenedorImagen.style.backgroundColor = seleColor;
  colorHex.innerText = seleColor;
});

selectModo.addEventListener("change", function () {
  const selected = selectModo.value;

  if (selected === "aclarar") {
    imagenMeme.style.mixBlendMode = "lighten";
  } else if (selected === "oscurecer") {
    imagenMeme.style.mixBlendMode = "darken";
  } else if (selected === "diferencia") {
    imagenMeme.style.mixBlendMode = "difference";
  } else if (selected === "luminosidad") {
    imagenMeme.style.mixBlendMode = "luminosity";
  } else if (selected === "multiplicar") {
    imagenMeme.style.mixBlendMode = "multiply";
  } else if (selected === "ninguno") {
    imagenMeme.style.mixBlendMode = "normal";
  }
});

/*  ---------------- Filtros---------------*/

/*  ---- Elementos ----*/

const inputBrillo = document.getElementById("brightness");
const inputOpacidad = document.getElementById("opacity");
const inputContraste = document.getElementById("contrast");
const inputDesenfoque = document.getElementById("blur");
const inputEscalaGrises = document.getElementById("grayscale");
const inputSepia = document.getElementById("sepia");
const inputHueRotation = document.getElementById("hue-rotation");
const inputSaturation = document.getElementById("saturation");
const inputNegativo = document.getElementById("invert");

/*  ---- Funcion aplicar filtros ----*/

function aplicarFiltros() {
  let brightness = inputBrillo.value;
  let opacity = inputOpacidad.value;
  let contrast = inputContraste.value;
  let blur = inputDesenfoque.value;
  let grayScale = inputEscalaGrises.value;
  let sepia = inputSepia.value;
  let hue = inputHueRotation.value;
  let saturation = inputSaturation.value;
  let invert = inputNegativo.value;

  imagenMeme.style.filter = `
      brightness(${brightness})
      opacity(${opacity})
      contrast(${contrast}%)
      blur(${blur}px)
      grayscale(${grayScale}%)
      sepia(${sepia}%)
      hue-rotate(${hue}deg)
      saturate(${saturation}%)
      invert(${invert})
  `;
}

inputBrillo.addEventListener("input", aplicarFiltros);
inputOpacidad.addEventListener("input", aplicarFiltros);
inputContraste.addEventListener("input", aplicarFiltros);
inputDesenfoque.addEventListener("input", aplicarFiltros);
inputEscalaGrises.addEventListener("input", aplicarFiltros);
inputSepia.addEventListener("input", aplicarFiltros);
inputHueRotation.addEventListener("input", aplicarFiltros);
inputSaturation.addEventListener("input", aplicarFiltros);
inputNegativo.addEventListener("input", aplicarFiltros);

/*  ---- Funcion restablecer filtros ----*/

/*  ---- Elementos ----*/

const botonRestablecerFiltros = document.getElementById(
  "boton-restablecer-filtros"
);

botonRestablecerFiltros.addEventListener("click", function () {
  inputBrillo.value = 1;
  inputOpacidad.value = 1;
  inputContraste.value = 100;
  inputDesenfoque.value = 0;
  inputEscalaGrises.value = 0;
  inputSepia.value = 0;
  inputHueRotation.value = 0;
  inputSaturation.value = 100;
  inputNegativo.value = 0;
  aplicarFiltros();
});

/*  ---------------- Textos ---------------*/
