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
    this._longitud = longitud;
    this._indice = 0;
    this._imagenes = [];
    for (var i = 0; i < longitud; i++) {
      this._imagenes.push(IMAGENES[i]);
    }
  }

  aleatorio() {
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