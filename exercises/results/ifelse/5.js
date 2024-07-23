// Solicita al usuario que introduzca dos números
const numero1 = parseFloat(prompt("Introduce el primer número:"));
const numero2 = parseFloat(prompt("Introduce el segundo número:"));

// Determina el número mayor y muestra el resultado en una alerta
let mensaje;

if (numero1 > numero2) {
  mensaje = `El número mayor es: ${numero1}`;
} else if (numero2 > numero1) {
  mensaje = `El número mayor es: ${numero2}`;
} else {
  mensaje = "Ambos números son iguales.";
}

alert(mensaje);
