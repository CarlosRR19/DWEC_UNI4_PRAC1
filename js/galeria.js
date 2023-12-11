//Se crea una constante para almacenar todas las imagenes
const IMAGENES = [
  "/images/foto1.jpg",
  "/images/foto2.jpg",
  "/images/foto3.jpg",
  "/images/foto4.jpg",
  "/images/foto5.jpg",
  "/images/foto6.jpg",
  "/images/foto7.jpg",
];

class Galeria {
  constructor(longitud) {
    //Se crea una condición para que siempre halla al menos 2 imagenes y nunca más que la cantidad total disponible
    if (longitud > IMAGENES.length || longitud < 2) {
      longitud = IMAGENES.length;
    }
    this._longitud = longitud;
    this._indice = 0;
    //Se crea un array de imagenes vacio
    this._imagenes = [];
    //Se recorre el array la cantidad de veces indicada en la longitud, llenandose con las imagenes que tenemos disponibles
    for (var i = 0; i < longitud; i++) {
      this._imagenes.push(IMAGENES[i]);
    }
  }

  // Se crean los métodos necesarios para el correcto funcionamiento del código
  aleatorio() {
    //Se utiliza Math.floor para que siempre de un número sin decimales
    this._indice = Math.floor(Math.random() * this._imagenes.length);

    return this._imagenes[this._indice];
  }

  ultima() {
    this._indice = this._imagenes.length - 1;

    return this._imagenes[this._indice];
  }

  primera() {
    this._indice = 0;

    return this._imagenes[this._indice];
  }

  anterior() {
    this._indice = this._indice - 1;

    return this._imagenes[this._indice];
  }

  siguiente() {
    this._indice = this._indice + 1;

    return this._imagenes[this._indice];
  }
}

export default Galeria;
