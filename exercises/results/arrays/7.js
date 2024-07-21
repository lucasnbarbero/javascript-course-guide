const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Contar la cantidad total de elementos en la matriz
let cantidadElementos = 0;
for (let i = 0; i < matriz.length; i++) {
  cantidadElementos += matriz[i].length;
}

console.log('Cantidad total de elementos en la matriz:', cantidadElementos);
