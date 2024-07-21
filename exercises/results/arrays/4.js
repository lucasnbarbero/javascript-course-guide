// Array de colores
const colores = ['azul', 'amarillo', 'rojo', 'verde', 'café', 'rosa'];

// Solicita al usuario que introduzca un color
const colorIngresado = prompt('Introduce un color:').toLowerCase();

// Verifica si el color ingresado está en el array
if (colores.includes(colorIngresado)) {
  alert('El color se encuentra en el array.');
} else {
  alert('El color no se encuentra en el array.');
}
