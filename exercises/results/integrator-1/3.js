const numeros = [];
let input = prompt("Introduce un número:");

while (input !== null) {
  const numero = parseFloat(input);
  if (!isNaN(numero) && numero > 10) {
    numeros.push(numero);
  } else {
    console.log("Número no válido o menor que 10.");
  }
  input = prompt("Introduce otro número (o cancela para finalizar):");
}

console.log("Números mayores a 10 introducidos:", numeros);
