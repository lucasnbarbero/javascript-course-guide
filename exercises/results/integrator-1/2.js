const usuarios = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 17 },
  { nombre: "María", edad: 30 }
];

const adultos = usuarios
  .filter(usuario => usuario.edad > 18)
  .map(usuario => ({ ...usuario, esAdulto: true }));

console.log("Usuarios adultos:", adultos);
