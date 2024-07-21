const coche = {
  marca: 'Ford',
  modelo: 'Mustang',
  año: 2022,
};

for (let propiedad in coche) {
  console.log(`${propiedad}: ${coche[propiedad]}`);
}
