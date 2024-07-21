class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  calcularArea() {
    return Math.PI * this.radio * this.radio;
  }
}

const circulo = new Circulo(5);
console.log(`Área del círculo: ${circulo.calcularArea()}`);
