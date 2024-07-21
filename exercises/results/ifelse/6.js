// Solicita al usuario que introduzca un string
const texto = prompt("Introduce un texto:");

// Verifica si el primer carácter del string es un número o una letra
const primerCaracter = texto.charAt(0);

const esNumero = !isNaN(parseInt(primerCaracter));

if (esNumero) {
  alert("El texto empieza con un número.");
} else {
  alert("El texto empieza con una letra.");
}
