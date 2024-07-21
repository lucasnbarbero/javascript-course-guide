let suma = 0;
let i = 1;
while (i <= 15) {
  if (i % 2 !== 0) {
    suma += i;
  }
  i++;
}
console.log('La suma de los números impares del 1 al 15 es: ' + suma);
