// Solicita al usuario que introduzca dos números
const numero1 = parseFloat(prompt("Introduce el primer número:"));
const numero2 = parseFloat(prompt("Introduce el segundo número:"));

// Determina el número mayor utilizando un operador ternario y muestra el resultado en una alerta
const mensaje = (numero1 > numero2) 
  ? `El número mayor es: ${numero1}` 
  : (numero2 > numero1) 
    ? `El número mayor es: ${numero2}` 
    : "Ambos números son iguales.";

alert(mensaje);
