# POO (Programación orientada a objetos)

La **Programación Orientada a Objetos** (POO, o en inglés OOP) es un estilo de programación muy utilizado, donde creas y utilizas estructuras de datos de una forma **muy similar a la vida real**, lo que facilita considerablemente la forma de planificar y preparar el código de tus programas o aplicaciones.

El concepto de **orientación a objetos** se ve muy claro cuando tenemos en nuestra mente el concepto de **Clase**. Todos los elementos relacionados con esa Clase los vamos a incluir en su interior. Por un lado, las variables y constantes que teníamos "sueltas" en nuestro programa, las agruparemos dentro de una clase, donde también incluiremos todas las funciones.

:::info
Las variables y constantes incluidas en una clase se denominan **propiedades**, y se utilizan para guardar información relacionada (_se suele denominar estado_). Por otro lado, las funciones incluidas en una clase se denominan **métodos** y se utilizan para realizar una acción relacionada con la clase.
:::

## POO en JavaScript

**Según Wikipedia, la [programación basada en clases](https://en.wikipedia.org/wiki/Class-based_programming) es:** <br />
...un estilo de programación orientada a objetos (POO), en el que la herencia se produce mediante la definición de clases de objetos, en lugar de que la herencia se produzca únicamente a través de los objetos...

Pero _JavaScript_ no es un lenguaje basado en clases, es un lenguaje basado en prototipos.

**Según la documentación de Mozilla:** <br />

Un [lenguaje basado en prototipos](https://developer.mozilla.org/es/docs/conflicting/Web/JavaScript/Inheritance_and_the_prototype_chain#lenguajes_basados_en_clases_vs._basados_en_prototipos) toma el concepto de objeto prototípico, un objeto que se utiliza como una plantilla a partir de la cual se obtiene el conjunto inicial de propiedades de un nuevo objeto.

Demos un vistazo a este código:

```js
let nombres = {
  nombre: 'Juan',
  apellido: 'Pérez',
};
console.log(nombres.nombre);
console.log(nombres.hasOwnProperty('segNombre'));
// Resultado esperado:
// Juan
// false
```

El objeto de la variable `nombres` solo tiene dos propiedades: `nombre` y `apellido`. Ningún método en absoluto.

Entonces, ¿de dónde viene `hasOwnProperty`?

Bueno, viene del prototipo `Object`.

Intenta registrar el contenido de la variable en la consola:

```js
console.log(nombres);
```

Cuando expandas los resultados en la consola, obtendrás esto:

![console.log(nombres)](https://www.freecodecamp.org/espanol/news/content/images/2021/01/Sin-t-tulo-1.png)

¿Notas la última propiedad: `<prototype>`? Intenta expandirlo:

![expansion-prototype](https://www.freecodecamp.org/espanol/news/content/images/2021/01/obj-prototype.png)

Verás un conjunto de propiedades en el constructor `Object`. Todas estas propiedades provienen del _prototipo_ `Object` global. Si observas de cerca, también notarás nuestra propiedad `hasOwnProperty` oculta.

En otras palabras, todos los objetos tienen acceso al prototipo de `Object`. No poseen estas propiedades, pero se les concede acceso a las propiedades del prototipo.

## La propiedad `<prototype>`

Esto apunta al objeto que se utiliza como prototipo.

Esta es la propiedad de cada objeto que le da acceso a la propiedad `Object prototype`(Prototipo de objeto).

Cada objeto tiene esta propiedad por defecto, que se refiere al prototipo de Objeto excepto cuando se configura de otra manera (es decir, cuando el `<prototype>` del objeto apunta a otro prototipo).

### Modificando la propiedad `<prototype>`

Esta propiedad se puede modificar, indicando explícitamente que debería referirse a otro prototipo. Se utilizan los siguientes métodos para lograr esto:

#### Método `Object.create()`:

```js
function Perro(nombre, edad) {
  let perro = Object.create(ObjetoConstructor);
  perro.nombre = nombre;
  perro.edad = edad;
  return perro;
}

let ObjetoConstructor = {
  habla: function () {
    return '¡Soy un perro!';
  },
};

let firulais = Perro('Firulais', 9);
console.log(firulais);
```

En la consola, esto es lo que tendrías:

![ejemplo-perro-consola](https://www.freecodecamp.org/espanol/news/content/images/2021/01/firulais-1.png)

¿Observas la propiedad `<prototype>` y el método `habla`?

`Object.create` usa el argumento que se le pasa para convertirse en el prototipo.

#### Palabra clave `new`:

```js
function Perro(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Perro.prototype.habla = function () {
  return '¡Soy un perro!';
};

let bobby = new Perro('Bobby', 12);
```

La propiedad `<prototype>` de `bobby`, es dirigida al prototipo de `Perro`. Pero recuerda, el prototipo de `Perro` es un objeto (par clave y valor), por lo tanto, también tiene una propiedad `<prototype>` que se refiere al prototipo de objeto global.

Esta técnica se conoce como **PROTOTYPE CHAINING** (encadenamiento de prototipos).

**Ten en cuenta que:** la palabra clave `new`, hace lo mismo que `Object.create()` pero solo lo hace más fácil, ya que hace algunas cosas automáticamente por ti.

