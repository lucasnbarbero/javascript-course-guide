const array = [1, 2, 3, 4, 5, 6];

// 1. Iterar por todos los elementos dentro del array utilizando while y mostrarlos en pantalla
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}

// 2. Iterar por todos los elementos dentro del array utilizando for y mostrarlos en pantalla
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 3. Iterar por todos los elementos dentro del array utilizando .forEach y mostrarlos en pantalla
array.forEach((elemento) => {
  console.log(elemento);
});

// 4. Mostrar todos los elementos dentro del array sumándole uno a cada uno
const arraySumado = array.map((elemento) => elemento + 1);
console.log('Array con cada elemento sumado en 1:', arraySumado);

// 5. Generar una copia de un array pero con todos los elementos incrementados en 1
const copiaArrayIncrementado = array.map((elemento) => elemento + 1);
console.log('Copia del array con cada elemento incrementado en 1:', copiaArrayIncrementado);

// 6. Calcular el promedio del array
let suma = 0;
for (let i = 0; i < array.length; i++) {
  suma += array[i];
}
const promedio = suma / array.length;
console.log('El promedio del array es:', promedio);
