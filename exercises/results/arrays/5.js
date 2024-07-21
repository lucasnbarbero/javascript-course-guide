const matriz1 = [[1, 1], [2, 2]];
const matriz2 = [[3, 1], [3, 2]];

// Sumar las dos matrices
const sumaMatriz = matriz1.map((fila, i) =>
  fila.map((valor, j) => valor + matriz2[i][j])
);

console.log("Matriz resultante de la suma:", sumaMatriz);
