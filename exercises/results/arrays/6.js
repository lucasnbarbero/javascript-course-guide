const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Sumar los elementos en la diagonal principal de la matriz
let sumaDiagonal = 0;
for (let i = 0; i < matriz.length; i++) {
  sumaDiagonal += matriz[i][i];
}

console.log('Suma de los elementos en la diagonal principal:', sumaDiagonal);
