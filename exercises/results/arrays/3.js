// Solicita al usuario que introduzca la cantidad de números aleatorios a generar
const cantidad = parseInt(prompt('Introduce la cantidad de números aleatorios a generar:'), 10);

// Verifica si la entrada del usuario es un número válido
if (isNaN(cantidad) || cantidad <= 0) {
  alert('Por favor, introduce un número válido mayor que 0.');
} else {
  // Crear un array vacío
  const array = [];

  // Generar N números al azar y guardarlos en el array
  for (let i = 0; i < cantidad; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
    array.push(numeroAleatorio);
  }

  // Mostrar el array con los números generados
  console.log('Array con números al azar:', array);
}
