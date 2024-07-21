const libro = {
  titulo: '1984',
  autor: 'George Orwell',
  año: 1949,
};

delete libro.año;
console.log("Libro sin propiedad 'año':", libro);
