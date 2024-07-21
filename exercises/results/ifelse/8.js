// Escoge un número entero al azar entre 1 y 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Solicita al usuario que introduzca su conjetura
const conjetura = parseInt(prompt('Adivina el número entre 1 y 10:'), 10);

// Verifica si la conjetura del usuario es correcta
if (conjetura === numeroAleatorio) {
  alert('¡Buen trabajo! Adivinaste el número.');
} else {
  alert('No corresponde. El número correcto era ' + numeroAleatorio + '.');
}
