import Galeria from "./galeria.js";

//Se crea el objeto de tipo Galeria y las variables necesarias
var galeria = new Galeria(7);
var imagen = document.getElementById("imagen");
var primera = document.getElementById("primera");
var siguiente = document.getElementById("siguiente");
var ultima = document.getElementById("ultima");
var anterior = document.getElementById("anterior");

//Se crea una función comprobar que será la encargada de dar los estilos correspondientes en función de la posición tomada dentro del array de imagenes
function comprobar() {
  if (galeria._indice == 0) {
    //Para deshabilitar los botones se les añade la clase "deshabilitado" y para volverlos a habilitar, se quita
    document.querySelector("#primera").classList.add("deshabilitado");
    document.querySelector("#anterior").classList.add("deshabilitado");
    document.querySelector("#ultima").classList.remove("deshabilitado");
    document.querySelector("#siguiente").classList.remove("deshabilitado");
  } else if (galeria._indice == galeria._imagenes.length - 1) {
    document.querySelector("#ultima").classList.add("deshabilitado");
    document.querySelector("#siguiente").classList.add("deshabilitado");
    document.querySelector("#primera").classList.remove("deshabilitado");
    document.querySelector("#anterior").classList.remove("deshabilitado");
  } else {
    document.querySelector("#primera").classList.remove("deshabilitado");
    document.querySelector("#anterior").classList.remove("deshabilitado");
    document.querySelector("#ultima").classList.remove("deshabilitado");
    document.querySelector("#siguiente").classList.remove("deshabilitado");
  }
}

/*Se crean los eventos correspondientes; Un tipo "load" para configurar la imagen que aparecera al cargar la página 
y cuatro tipo "click" para navegar por el array a través de los botones */
window.addEventListener("load", load);

/* La función "comprobar()" se ejecutara en último lugar dentro del resto de funciones 
para así aplicarla sobre la posición actual y no sobre una posición anterior */
function load() {
  imagen.style.backgroundImage = "url('" + galeria.aleatorio() + "')";
  comprobar();
}

primera.addEventListener("click", first);

function first() {
  imagen.style.backgroundImage = "url('" + galeria.primera() + "')";
  comprobar();
}

siguiente.addEventListener("click", next);

function next() {
  imagen.style.backgroundImage = "url('" + galeria.siguiente() + "')";
  comprobar();
}

ultima.addEventListener("click", last);

function last() {
  imagen.style.backgroundImage = "url('" + galeria.ultima() + "')";
  comprobar();
}

anterior.addEventListener("click", previous);

function previous() {
  imagen.style.backgroundImage = "url('" + galeria.anterior() + "')";
  comprobar();
}
