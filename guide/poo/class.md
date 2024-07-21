# Clases

_JavaScript_ introdujo la palabra clave class en [ECMAScript](https://es.wikipedia.org/wiki/ECMAScript) 2015. Hace que JavaScript parezca un lenguaje POO. Pero solo es [azúcar sintáctico](https://es.wikipedia.org/wiki/Az%C3%BAcar_sint%C3%A1ctico) sobre la técnica de creación de prototipos existente. Continúa con la creación de prototipos en segundo plano, pero hace que el cuerpo exterior parezca POO. Ahora veremos cómo es posible.

El siguiente ejemplo es un uso general de una class en JavaScript:

```js
class Animales {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }

  canta() {
    return `${this.nombre} puede cantar`;
  }

  baila() {
    return `${this.nombre} puede bailar`;
  }
}

let bongo = new Animales('Bongo', 'Peludo');
console.log(bongo);
```

Este es el resultado en consola:

![ejemplo-peludo-bongo](https://www.freecodecamp.org/espanol/news/content/images/2021/01/class-Animales.png)

El `<prototype>` hace referencia al prototipo de `Animales` (que a su vez hace referencia al prototipo de `Object`).

A partir de esto, podemos ver que el constructor define las características principales, mientras que todo lo que está fuera del constructor (`canta()` y `baila()`) son las características adicionales (**prototipos**).

En segundo plano, utilizando el enfoque de la palabra clave `new`, lo anterior se traduce en:

```js
function Animales(nombre, especie) {
  this.nombre = nombre;
  this.especie = especie;
}

Animales.prototype.canta = function () {
  return `${this.nombre} puede cantar`;
};

Animales.prototype.baila = function () {
  return `${this.nombre} puede bailar`;
};

let bongo = new Animales('Bongo', 'Peludo');
```

## ¿Qué es una clase?

Una **clase** sólo es una forma de organizar código de forma entendible con el objetivo de simplificar el funcionamiento de nuestro programa. Además, hay que tener en cuenta que las clases son «conceptos abstractos» de los que se pueden crear objetos de programación, cada uno con sus características concretas.

![Ejemplo de clases](https://lenguajejs.com/javascript/oop/clases/clases-objetos.png)

En primer lugar tenemos la **clase**. La clase es el **concepto abstracto** de un objeto, mientras que el **objeto** es el elemento final que se basa en la clase.

- En el **primer ejemplo** tenemos dos objetos: `pato` y `ratón`. Ambos son animales, por lo que son objetos que están basados en la clase `Animal`. Tanto `pato` como `ratón` tienen las características que estarán definidas en la clase `Animal`: color, sonido que emiten, nombre, etc...
- En el **segundo ejemplo** tenemos dos objetos `seat` y `opel`. Se trata de dos coches, que son vehículos, puesto que están basados en la clase `Vehículo`. Cada uno tendrá las características de su clase: color del vehículo, número de ruedas, marca, modelo, etc...
- En el **tercer ejemplo** tenemos dos objetos `cuadrado` y `rectángulo`. Se trata de dos formas geométricas, que al igual que los ejemplos anteriores tendrán sus propias características, como por ejemplo el tamaño de sus lados. El elemento `cuadrado` puede tener un lado de `3` cm y el elemento `rectángulo` puede tener un lado de `6` cm.

## Instanciar una clase

Se le llama **instanciar una clase**, **crear un objeto** o **crear una instancia** a la acción de crear un nuevo objeto basado en una clase particular. Esta acción la realizamos a través de la palabra clave `new`, seguida del nombre de la clase, la cuál puede tener parámetros, en cuyo caso se controlarían desde un `constructor`, concepto que veremos más adelante.

Aquí tenemos un ejemplo de como intanciar una clase:

```js
// Declaración de una clase (de momento, vacía)
class Animal {}

// Crear (instanciar) un objeto basada en una clase
const pato = new Animal();
```

El nombre elegido debería hacer referencia a la información que va a contener dicha clase. Luego creamos una variable donde hacemos un `new Animal()`. Estamos creando un objeto `pato` que es de tipo `Animal`, y que contendrá todas las características definidas dentro de la clase `Animal`.

:::info NOMENCLATURA SUGERIDA
Una norma de estilo en el mundo de la programación es que las clases deben siempre empezar en mayúsculas (nomenclatura llamada _PascalCase_). Esto nos ayudará a diferenciarlas sólo con leerlas.
:::

## Miembros de una clase

Una clase tiene diferentes **características** que la forman, que generalmente se denominan miembros, y que normalmente son de dos tipos: **propiedades** y **métodos**.

### Propiedades

Variable que existe dentro de una clase. Puede ser pública o privada.

| Elemento            | Descripción                                                              |
| ------------------- | ------------------------------------------------------------------------ |
| Propiedad pública   | Propiedad a la que se puede acceder desde fuera de la clase.             |
| Propiedad privada   | Propiedad a la que no se puede acceder desde fuera de la clase.          |
| Propiedad computada | Función para acceder a una propiedad con modificaciones (getter/setter). |

### Métodos

Función que existe dentro de una clase. Puede ser pública o privada.

| Elemento               | Descripción                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| Método                 | Función que existe dentro de una clase. Puede ser pública o privada.             |
| Método público         | Método que se puede ejecutar desde dentro y fuera de la clase.                   |
| Método privado         | Método que sólo se puede ejecutar desde dentro de la clase.                      |
| Constructor            | Método especial que se ejecuta automáticamente cuando se crea una instancia.     |
| Método estático        | Método que se ejecuta directamente desde la clase, no desde la instancia.        |
| Inicializador estático | Bloque de código que se ejecuta al definir la clase, sin necesidad de instancia. |

### Ejemplo de cada uno

```js
class Animal {
  // Propiedades
  name = 'Garfield';
  type = 'cat';

  // Métodos
  hablar() {
    return 'Odio los lunes.';
  }
}
```

## Palabra clave `this`

Esta es una palabra clave que se utiliza mucho dentro de las clases para hacer referencia al objeto instanciado.

```js
class Animal {
  name; // Propiedad (variable de clase sin valor definido)

  constructor(name) {
    this.name = name; // Hacemos referencia a la propiedad name del objeto instanciado
  }
}
```

Observa que la palabra clave `this` no se refiere a la clase `Animal` exactamente, sino a la variable que utilizamos al instanciarla. Es decir, si hacemos un `const pato = new Animal()`, se ejecutaría el constructor y la palabra clave `this` haría referencia a `pato`, por lo que `this.name` estaría haciendo referencia a `pato.name`.

## Clases en ficheros externos

Generalmente, para tener el código lo más organizado posible, las clases se suelen almacenar en ficheros individuales, de forma que cada clase que creamos, debería estar en un fichero con su mismo nombre:

```js
// Animal.js

export class Animal {
  /* Contenido de la clase */
}
```

Luego, si queremos crear objetos basados en esta clase, lo habitual suele ser importar el fichero de la clase en cuestión y crear el objeto a partir de la clase. Algo similar al siguiente fragmento de código:

```js
// index.js

import { Animal } from './Animal.js';

const pato = new Animal();
```
