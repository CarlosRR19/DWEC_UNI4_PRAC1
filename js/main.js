// Se crea un array de imagenes para poder manejarlas de forma eficiente
const IMAGENES = [
  "/images/foto1.jpg",
  "/images/foto2.jpg",
  "/images/foto3.jpg",
  "/images/foto4.jpg",
  "/images/foto5.jpg",
  "/images/foto6.jpg",
  "/images/foto7.jpg",
];

// Se asignan las variables necesarias
var indiceImagenActual = 0;
var siguiente = document.getElementById("siguiente");
var primera = document.getElementById("primera");
var ultima = document.getElementById("ultima");
var anterior = document.getElementById("anterior");
var imagen = document.getElementById("imagen");

/* Se crea una funcion para comprobar la posición actual y establecer los estilos correspondientes en consecuencia:

Rojo = deshabilitado
Verde = habilitado

*/

function comprobar() {
  if (indiceImagenActual == 0) {
    // Se podría utilizar e.preventDefault() dentro de los propios eventos para deshabilitar los botones, pero considero que este método es más simple y compacto
    primera.style.pointerEvents = "none";
    primera.style.backgroundColor = "red";
    anterior.style.pointerEvents = "none";
    anterior.style.backgroundColor = "red";
    ultima.style.pointerEvents = "auto";
    ultima.style.backgroundColor = "green";
    siguiente.style.pointerEvents = "auto";
    siguiente.style.backgroundColor = "green";
  } else if (indiceImagenActual == IMAGENES.length - 1) {
    ultima.style.pointerEvents = "none";
    ultima.style.backgroundColor = "red";
    siguiente.style.pointerEvents = "none";
    siguiente.style.backgroundColor = "red";
    primera.style.pointerEvents = "auto";
    primera.style.backgroundColor = "green";
    anterior.style.pointerEvents = "auto";
    anterior.style.backgroundColor = "green";
  } else {
    primera.style.pointerEvents = "auto";
    primera.style.backgroundColor = "green";
    anterior.style.pointerEvents = "auto";
    anterior.style.backgroundColor = "green";
    ultima.style.pointerEvents = "auto";
    ultima.style.backgroundColor = "green";
    siguiente.style.pointerEvents = "auto";
    siguiente.style.backgroundColor = "green";
  }
}

// Se crea un evento "load" para que al cargar la página se muestre la primera imagen del array
// Notese que se ejecuta la función "comprobar" en cada evento y después de modificar la posición para así actualizar los estilos
window.addEventListener("load", cargar);

function cargar() {
  comprobar();
  imagen.style.backgroundImage = "url('" + IMAGENES[indiceImagenActual] + "')";
}

// Se crean varios elementos "click" para cumplir con los requisitos cada vez que se hace click en cada uno de los botones
siguiente.addEventListener("click", next);

function next() {
  // Se actualiza la posición para acceder a la siguiente imagen dentro del array
  indiceImagenActual = indiceImagenActual + 1;
  comprobar();
  imagen.style.backgroundImage = "url('" + IMAGENES[indiceImagenActual] + "')";
}

anterior.addEventListener("click", before);

function before() {
  // Se actualiza la posición para acceder a la anterior imagen dentro del array
  indiceImagenActual = indiceImagenActual - 1;
  comprobar();
  imagen.style.backgroundImage = "url('" + IMAGENES[indiceImagenActual] + "')";
}

primera.addEventListener("click", first);

function first() {
  // Se actualiza la posición para acceder a la primera imagen dentro del array
  indiceImagenActual = 0;
  comprobar();
  imagen.style.backgroundImage = "url('" + IMAGENES[indiceImagenActual] + "')";
}

ultima.addEventListener("click", last);

function last() {
  // Se actualiza la posición para acceder a la última imagen dentro del array
  indiceImagenActual = IMAGENES.length - 1;
  comprobar();
  imagen.style.backgroundImage = "url('" + IMAGENES[indiceImagenActual] + "')";
}
