# Propiedades de clases

Las **clases**, siendo estructuras para guardar y almacenar información, tienen unas **variables** que viven dentro de la clase. Esta información (también llamada estado) se denomina **propiedad** o **propiedad de clase** y desde ECMAScript 2020 para crearlas se hace de la siguiente forma:

```js
class Personaje {
  name; // Propiedad sin definir (undefined)
  type = 'Player'; // Propiedad definida
  lifes = 5; // Propiedad definida con 5 vidas restantes
  energy = 10; // Propiedad definida con 10 puntos de energía
}
```

Tradicionalmente en Javascript, las **propiedades** acostumbraban a definirse a través del constructor, mediante la palabra clave `this`, por lo que es muy probable que también te las encuentres declaradas de esta forma, sin necesidad de declararlas fuera del constructor:

```js
class Personaje {
  constructor() {
    this.name; // Propiedad sin definir (undefined)
    this.type = 'Player'; // Propiedad definida
    this.lifes = 5; // Propiedad definida con 5 vidas restantes
    this.energy = 10; // Propiedad definida con 10 puntos de energía
  }
}
```

## Visibilidad de propiedades

Las **propiedades de clase** siempre van a tener una visibilidad específica, que puede ser **pública** (por defecto) o **privada**. En el primer caso, las propiedades pueden ser leídas o modificadas tanto desde dentro de la clase como desde fuera, en el segundo caso, sólo pueden ser leídas o modificadas desde el interior de la clase.

### Propiedades públicas

Por defecto, las propiedades en las clases son públicas. Observa que siempre vamos a poder acceder a las propiedades desde el constructor u otros métodos (dentro de la clase), ya sean propiedades públicas o privadas:

```js
class Personaje {
  name;
  energy = 10;

  constructor(name) {
    this.name = name;
  }
}

const mario = new Personaje('Mario'); // { name: "Mario", energy: 10 }
mario.name; // "Mario" (se puede acceder desde fuera)
mario.name = 'Evil Mario';
mario.name; // "Evil Mario" (se ha modificado desde fuera)
```

### Propiedades privadas

A partir de la versión ECMAScript 2020, se introduce la posibilidad de crear propiedades de clase privadas. Por defecto, todas las propiedades y métodos son públicos por defecto, sin embargo, si añadimos el carácter `#` justo antes del nombre de la propiedad, se tratará de una **propiedad privada**:

```js
class Personaje {
  #name;
  energy = 10;

  constructor(name) {
    this.#name = name;
  }
}

const mario = new Personaje('Mario'); // { name: "Mario", energy: 10 }

// Es incorrecto, el nombre correcto de la propiedad es #name
mario.name; // undefined

// Los dos siguientes dan el mismo error (no se puede acceder a la propiedad privada)
// Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
mario.#name;
mario.#name = 'Evil Mario';

// Lo siguiente funcionará, pero ha creado otra propiedad 'name' que no es la misma que '#name'
mario.name = 'Evil Mario';
```
