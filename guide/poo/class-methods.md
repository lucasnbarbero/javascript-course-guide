# Métodos de clase

Simplificando mucho, un **método** es el nombre que recibe una **función** que existe dentro de una clase. Se utilizan para englobar comportamientos o funcionalidades relacionadas en conjunto con la clase y mediante las cuales podemos segmentar y separar en bloques de código.

## ¿Qué es un método?

En nuestro caso, hablamos de **métodos** cuando nos referimos a **funciones** que existen en el interior de una clase.

```js
// Forma corta (recomendado)
class Animal {
  hablar() {
    return 'Cuak';
  }
}

// Forma larga
class Animal {
  hablar = function () {
    return 'Cuak';
  };
}
```

Una vez declarado el método `hablar()` dentro de la clase `Animal`, podemos instanciar el objeto mediante un `new Animal()` y tener ese método disponible. Ten en cuenta que podemos crear varias variables de tipo `Animal` y serán totalmente independientes cada una:

```js
// Creación de una instancia u objeto (pato)
const pato = new Animal();
pato.hablar(); // 'Cuak'

// Creación de otra instancia u objeto (donald)
const donald = new Animal();
donald.hablar(); // 'Cuak'
```

## Método constructor

Se le llama **constructor** a un método de clase especial que se ejecuta automáticamente cuando se hace un `new` de dicha clase (al instanciar el objeto). Una clase **solo puede tener un constructor**, y en el caso de que no se especifique un constructor a una clase, tendrá uno vacío de forma implícita.

Veamos un ejemplo:

```js
class Animal {
  constructor() {
    console.log('Ha nacido un pato. 🦆');
  }

  hablar() {
    return 'Cuak';
  }
}

// Creación de instancia/objeto
const pato = new Animal(); // 'Ha nacido un pato' (Se ha ejecutado implicitamente el constructor)
pato.hablar(); // 'Cuak' (Se ha ejecutado explícitamente el método hablar)
```

## ¿Qué es un método estático?

Nos podría interesar crear **métodos estáticos** en una clase, ya que este tipo de métodos **no requieren crear una instancia**, sino que se pueden ejecutar directamente sobre la clase:

```js
class Animal {
  static despedirse() {
    return 'Adiós';
  }

  hablar() {
    return 'Cuak';
  }
}

Animal.despedirse(); // Método estático (no requiere instancia): 'Adiós'
Animal.hablar(); // Uncaught TypeError: Animal.hablar is not a function

const pato = new Animal(); // Creamos una instancia

pato.despedirse(); // Uncaught TypeError: pato.despedirse is not a function
pato.hablar(); // Método no estático (requiere instancia): 'Cuak'
```

Una de las limitaciones de los **métodos estáticos** es que en su interior sólo podremos hacer referencia a elementos que también sean estáticos. No podremos acceder a propiedades o métodos no estáticos.

## Métodos públicos

Por norma general, los métodos de una clase son **públicos**, por lo que podemos acceder tanto desde dentro de la clase como desde fuera. Observa que desde el `constructor` estamos accediendo a `hablar()` desde dentro de la clase y al crear el objeto, se llamará a ese método:

```js
class Personaje {
  name = 'Mario';

  constructor() {
    this.hablar();
  }

  hablar() {
    console.log("It's me, Mario!");
  }
}

const mario = new Personaje(); // It's me, Mario! (se ha accedido a hablar() desde dentro de la clase)
mario.hablar(); // It's me, Mario! (se ha accedido a hablar() desde fuera de la clase)
```

## Métodos privados

¿Qué es lo que ocurre si definimos el método `hablar()` como un método privado? Para ello, simplemente le añadimos el símbolo `#` antes del nombre, asegurándonos también de incluirlo en las llamadas al método. Quedaría algo así:

```js
class Personaje {
  name = 'Mario';

  constructor() {
    this.#hablar();
  }

  #hablar() {
    console.log("It's me, Mario!");
  }
}

const mario = new Personaje(); // It's me, Mario! (se ha accedido a #hablar() desde dentro de la clase)

// Da error, no se permite acceder a un método privado desde fuera de la clase
// Uncaught SyntaxError: Private field '#hablar' must be declared in an enclosing class
mario.#hablar();

// Da error, el método hablar() no existe, ya que el nombre del método es #hablar()
// Uncaught TypeError: mario.hablar is not a function
mario.hablar();
```
