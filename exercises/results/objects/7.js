const persona1 = {
  nombre: 'Ana',
  edad: 25,
};

const persona2 = {
  ocupacion: 'Diseñadora',
  ciudad: 'Madrid',
};

// Combinar los dos objetos en uno nuevo
const personaCompleta = {};

for (let propiedad in persona1) {
  personaCompleta[propiedad] = persona1[propiedad];
}

for (let propiedad in persona2) {
  personaCompleta[propiedad] = persona2[propiedad];
}

console.log('Persona combinada:', personaCompleta);
