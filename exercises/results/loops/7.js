const cadena = prompt('Introduce una cadena de texto:');
const letra = 'a';
let contador = 0;

for (let i = 0; i < cadena.length; i++) {
  if (cadena[i] === letra) {
    contador++;
  }
}

console.log(`La letra '${letra}' aparece ${contador} veces en la cadena.`);
