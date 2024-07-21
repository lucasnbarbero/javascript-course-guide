// Solicita al usuario que introduzca una palabra
const palabra = prompt("Introduce una palabra:");

// Verifica si la primera letra de la palabra es mayúscula
const primeraLetra = palabra.charAt(0);

if (primeraLetra === primeraLetra.toUpperCase()) {
  alert("La palabra empieza con una mayúscula.");
} else {
  alert("La palabra no empieza con una mayúscula.");
}
