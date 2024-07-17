# Strings

En JavaScript, los datos textuales son almacenados como strings (cadena de caracteres). No hay un tipo de datos separado para caracteres unitarios.

El formato interno para strings es siempre [UTF-16](https://es.wikipedia.org/wiki/UTF-16), no está vinculado a la codificación de la página.

## Comillas

Recordemos los tipos de comillas.

Los strings pueden estar entre comillas simples, comillas dobles o backticks (acento grave):

```js
let single = 'comillas simples';
let double = 'comillas dobles';

let backticks = `backticks`;
```

Comillas simples y dobles son esencialmente lo mismo. En cambio, los "backticks" nos permiten además ingresar expresiones dentro del string envolviéndolos en `${...}`:

```js
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```

Otra ventaja de usar backticks es que nos permiten extender en múltiples líneas el string:

```js
let guestList = `Invitados:
 * Juan
 * Pedro
 * Maria
`;

alert(guestList); // una lista de invitados, en múltiples líneas
```

Se ve natural, ¿no es cierto? Pero las comillas simples y dobles no funcionan de esa manera.

Si intentamos usar comillas simples o dobles de la misma forma, obtendremos un error:

```js
let guestList = "Invitados:  // Error: Unexpected token ILLEGAL
  * Juan";
```

## Caracteres especiales

Es posible crear strings de múltiples líneas usando comillas simples, usando un llamado “carácter de nueva línea”, escrito como `\n`, lo que denota un salto de línea:

```js
let guestList = 'Invitados:\n * Juan\n * Pedro\n * Maria';

alert(guestList); // lista de invitados en múltiples líneas, igual a la de más arriba
```

Como ejemplo más simple, estas dos líneas son iguales, pero escritas en forma diferente:

```js
let str1 = 'Hello\nWorld'; // dos líneas usando el "símbolo de nueva línea"

// dos líneas usando nueva línea normal y backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true
```

## Largo del string

La propiedad `length` contiene el largo del string

```js
alert('Lucas'.length); // 5
```

:::warning `length` es una propiedad
Quienes tienen experiencia en otros lenguajes pueden cometer el error de escribir `str.length()` en vez de `str.length`. **Eso no funciona**.

Nota que `str.length` es una propiedad numérica, no una función. No hay que agregar paréntesis después de ella. No es `.length()`, sino `.length`.
:::

## Accediendo a caracteres

Para acceder a un carácter en la posición `pos`, se debe usar corchetes, `[pos]`, o llamar al método `str.at(pos)`. El primer carácter comienza desde la posición cero:

```js
let str = `Hola`;

// el primer carácter
alert(str[0]); // H
alert(str.at(0)); // H

// el último carácter
alert(str[str.length - 1]); // a
alert(str.at(-1));
```

Como puedes ver, el método `.at(pos)` tiene el beneficio de permitir una posición negativa. Si `pos` es negativa, se cuenta desde el final del string.

Así, `.at(-1)` significa el último carácter, y `.at(-2)` es el anterior a él, etc.

Los corchetes siempre devuelven undefined para índices negativos:

```js
let str = `Hola`;

alert(str[-2]); // undefined
alert(str.at(-2)); // l
```

Podemos además iterar sobre los caracteres usando `for..of`:

```js
for (let char of 'Hola') {
  alert(char); // H,o,l,a (char se convierte en "H", luego "o", luego "l", etc.)
}
```

## Los strings son inmutables

Los strings no pueden ser modificados en JavaScript. Es imposible modificar un carácter.

Intentémoslo para demostrar que no funciona:

```js
let str = 'Hola';

str[0] = 'h'; // error
alert(str[0]); // no funciona
```

Lo usual para resolverlo es crear un nuevo string y asignarlo a `str` reemplazando el string completo.

Por ejemplo:

```js
let str = 'Hola';

str = 'h' + str[1] + str[2] + str[3]; // reemplaza el string

alert(str); // hola
```

## Capitalización

Los métodos `toLowerCase()` y `toUpperCase()` cambian los caracteres a minúscula y mayúscula respectivamente:

```js
alert('Interfaz'.toUpperCase()); // INTERFAZ
alert('Interfaz'.toLowerCase()); // interfaz
```

Si queremos un solo carácter en minúscula:

```js
alert('Interfaz'[0].toLowerCase()); // 'i'
```

## Buscando una subcadena de caracteres

Existen muchas formas de buscar por subcadenas de caracteres dentro de una cadena completa.

### str.indexOf

El primer método es [str.indexOf(substr, pos)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf).

Este busca un `substr` en `str`, comenzando desde la posición entregada `pos`, y retorna la posición donde es encontrada la coincidencia o `-1` en caso de no encontrar nada.

Por ejemplo:

```js
let str = 'Widget con id';

alert(str.indexOf('Widget')); // 0, ya que 'Widget' es encontrado al comienzo
alert(str.indexOf('widget')); // -1, no es encontrado, la búsqueda toma en cuenta minúsculas y mayúsculas.

alert(str.indexOf('id')); // 1, "id" es encontrado en la posición 1 (..idget con id)
```

El segundo parámetro es opcional y nos permite buscar desde la posición entregada.

Por ejemplo, la primera ocurrencia de `"id"` es en la posición `1`. Para buscar por la siguiente ocurrencia, comencemos a buscar desde la posición `2`:

```js
let str = 'Widget con id';

alert(str.indexOf('id', 2)); // 11
```

:::info `str.lastIndexOf(substr, position)`
También hay un método similar `str.lastIndexOf(substr, position)` que busca desde el final del string hasta el comienzo.

Este imprimirá las ocurrencias en orden invertido.
:::

### includes, startsWith, endsWith

El método más moderno `str.includes(substr, pos)` devuelve `true` o `false` si `str` contiene `substr` o no.

Es la opción adecuada si lo que necesitamos es verificar que exista, pero no su posición.

```js
alert('Widget con id'.includes('Widget')); // true

alert('Hola'.includes('Adiós')); // false
```

El segundo argumento opcional de `str.includes` es la posición desde donde comienza a buscar:

```js
alert('Midget'.includes('id')); // true
alert('Midget'.includes('id', 3)); // false, desde la posición 3 no hay "id"
```

Los métodos `str.startsWith` (comienza con) y `str.endsWith` (termina con) hacen exactamente lo que dicen:

```js
alert('Widget'.startsWith('Wid')); // true, "Widget" comienza con "Wid"
alert('Widget'.endsWith('get')); // true, "Widget" termina con "get"
```

## Obteniendo un substring

Existen 3 métodos en JavaScript para obtener un substring: `substring`, `substr` y `slice`.

### `str.slice(comienzo [, final])`

Retorna la parte del string desde `comienzo` hasta (pero sin incluir) final.

Por ejemplo:

```js
let str = 'stringify';
alert(str.slice(0, 5)); // 'strin', el substring desde 0 hasta 5 (sin incluir 5)
alert(str.slice(0, 1)); // 's', desde 0 hasta 1, pero sin incluir 1, por lo que sólo el carácter en 0
```

Si no existe el segundo argumento, entonces slice va hasta el final del string:

```js
let str = 'stringify';
alert(str.slice(2)); // 'ringify', desde la 2nda posición hasta el final
```

También son posibles valores negativos para `comienzo/final`. Estos indican que la posición es contada desde el final del string.

```js
let str = 'stringify';
// comienza en la 4ta posición desde la derecha, finaliza en la 1era posición desde la derecha
alert(str.slice(-4, -1)); // 'gif'
```

### `str.substring(comienzo [, final])`

Devuelve la parte del string entre comienzo y final (no incluyendo final).

Esto es casi lo mismo que `slice`, pero permite que `comienzo` sea mayor que `final` (en este caso solo intercambia los valores de comienzo y final).

Por ejemplo:

```js
let str = 'stringify';

// esto es lo mismo para substring
alert(str.substring(2, 6)); // "ring"
alert(str.substring(6, 2)); // "ring"

// ...pero no para slice:
alert(str.slice(2, 6)); // "ring" (lo mismo)
alert(str.slice(6, 2)); // "" (un string vacío)
```

Los argumentos negativos (al contrario de slice) no son soportados, son tratados como 0.

### `str.substr(comienzo [, largo])`

Retorna la parte del string desde `comienzo`, con el `largo` dado.

A diferencia de los métodos anteriores, este nos permite especificar el `largo` en lugar de la posición final:

```js
let str = 'stringify';
alert(str.substr(2, 4)); // ring, desde la 2nda posición toma 4 caracteres
```

El primer argumento puede ser negativo, para contar desde el final:

```js
let str = 'stringify';
alert(str.substr(-4, 2)); // gi, desde la 4ta posición toma 2 caracteres
```

Este método reside en el [Anexo B](https://tc39.es/ecma262/#sec-string.prototype.substring) de la especificación del lenguaje. Esto significa que solo necesitan darle soporte los motores Javascript de los navegadores, y no es recomendable su uso. Pero en la práctica, es soportado en todos lados.

### Resumen

Para evitar confusiones:

| Método                       | Selecciona…                                    | Negativos                        |
| ---------------------------- | ---------------------------------------------- | -------------------------------- |
| `slice(comienzo, final)`     | desde comienzo hasta final (sin incluir final) | permite negativos                |
| `substring(comienzo, final)` | entre comienzo y final (no incluye final)      | valores negativos significan `0` |
| `substr(comienzo, largo)`    | desde comienzo toma largo caracteres           | permite negativos en `comienzo`  |

:::info ¿Cuál elegir?
Todos son capaces de hacer el trabajo. Formalmente, `substr` tiene una pequeña desventaja: no es descrito en la especificación central de JavaScript, sino en el anexo B, el cual cubre características sólo de navegadores, que existen principalmente por razones históricas. Por lo que entornos sin navegador pueden fallar en compatibilidad. Pero en la práctica, funciona en todos lados.

De las otras dos variantes, `slice` es algo más flexible, permite argumentos negativos y es más corta.

Entones, es suficiente recordar únicamente `slice`.
:::
