import Galeria from "./galeria.js";

var galeria = new Galeria(7);
var imagen = document.getElementById("imagen");
var primera = document.getElementById("primera");
var siguiente = document.getElementById("siguiente");
var ultima = document.getElementById("ultima");
var anterior = document.getElementById("anterior");

function comprobar() {
  if (galeria._indice == 0) {
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

window.addEventListener("load", load);

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
