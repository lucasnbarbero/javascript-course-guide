const usuario = {
  usuario: 'johndoe',
  email: 'john@example.com',
};

if ('email' in usuario) {
  console.log("La propiedad 'email' existe en el objeto.");
} else {
  console.log("La propiedad 'email' no existe en el objeto.");
}
