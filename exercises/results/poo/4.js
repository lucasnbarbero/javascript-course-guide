class Rectangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calcularPerímetro() {
    return 2 * (this.base + this.altura);
  }
}

const rectangulo = new Rectangulo(4, 6);
console.log(`Perímetro del rectángulo: ${rectangulo.calcularPerímetro()}`);
