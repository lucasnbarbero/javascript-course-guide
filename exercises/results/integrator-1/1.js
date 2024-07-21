const datos = {
  numeros1: [1, 2, 3, 4],
  numeros2: [5, 6, 7, 8],
};

let sumaTotal = 0;

for (let clave in datos) {
  const array = datos[clave];
  for (let i = 0; i < array.length; i++) {
    sumaTotal += array[i];
  }
}

console.log('Suma total de todos los números:', sumaTotal);
