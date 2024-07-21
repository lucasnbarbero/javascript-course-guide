// Solicita al usuario que introduzca dos números
const numero1 = prompt("Introduce el primer número:");
const numero2 = prompt("Introduce el segundo número:");

// Convierte las entradas a números
const num1 = parseFloat(numero1);
const num2 = parseFloat(numero2);

// Determina el número mayor y muestra el resultado en una alerta
if (num1 > num2) {
  alert(`El número mayor es: ${num1}`);
} else if (num2 > num1) {
  alert(`El número mayor es: ${num2}`);
} else {
  alert("Ambos números son iguales.");
}
