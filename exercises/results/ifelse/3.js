// Solicita al usuario que introduzca un número
const numero = prompt('Introduce un número:');

// Verifica si el número es divisible por 11 y por 5
if (numero % 11 === 0 && numero % 5 === 0) {
  console.log('El número es divisible por 11 y por 5.');
} else {
  console.log('El número no es divisible por 11 y por 5.');
}
