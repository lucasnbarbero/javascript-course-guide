const numero = parseInt(prompt('Introduce un número para calcular su factorial:'), 10);
let factorial = 1;
let i = numero;

while (i > 0) {
  factorial *= i;
  i--;
}

console.log(`El factorial de ${numero} es: ${factorial}`);
