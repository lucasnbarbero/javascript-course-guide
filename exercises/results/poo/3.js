class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    console.log('Este animal hace un sonido.');
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log('¡Guau!');
  }
}

const perro = new Perro('Rex');
perro.hacerSonido();
