// Crear un array vacío
const array = [];

// Generar 20 números al azar y guardarlos en el array
for (let i = 0; i < 20; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
  array.push(numeroAleatorio);
}

// Mostrar el array con los números generados
console.log('Array con 20 números al azar:', array);
