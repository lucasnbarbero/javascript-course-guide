# Condicionales (`if`, `else`, `else if`, `switch`)

En programación, las estructuras condicionales son fundamentales para controlar el flujo de ejecución de nuestro código. Nos permiten tomar decisiones basadas en condiciones específicas y ejecutar diferentes bloques de código en función de esas condiciones.

## `if`

La sentencia `if(...)` evalúa la condición en los paréntesis, y si el resultado es verdadero (`true`), ejecuta un bloque de código.

Por ejemplo:

```js
let year = prompt('¿En que año fué publicada la especificación ECMAScript-2015?', '');

if (year == 2015) alert('¡Estás en lo cierto!');
```

Aquí la condición es una simple igualdad (`year == 2015`), pero podría ser mucho más compleja.

Si queremos ejecutar más de una sentencia, debemos encerrar nuestro bloque de código entre llaves:

```js
if (year == 2015) {
  alert('¡Es Correcto!');
  alert('¡Eres muy inteligente!');
}
```

Recomendamos encerrar nuestro bloque de código entre llaves `{}` siempre que se utilice la sentencia `if`, incluso si solo se va a ejecutar una sola sentencia. Al hacerlo mejoramos la legibilidad.

## `else`

La sentencia if puede contener un bloque else (“si no”, “en caso contrario”) opcional. Este bloque se ejecutará cuando la condición sea falsa.

Por ejemplo:

```js
let year = prompt('¿En qué año fue publicada la especificación ECMAScript-2015?');

if (year == 2015) {
  alert('¡Lo adivinaste, correcto!');
} else {
  alert('¿Cómo puedes estar tan equivocado?'); // cualquier valor excepto 2015
}
```

## `else if`

A veces queremos probar más de una condición. La clausula `else if` nos permite hacer esto.

Por ejemplo:

```js
let year = prompt('¿En qué año fue publicada la especificación ECMAScript-2015?', '');

if (year < 2015) {
  alert('Muy poco...');
} else if (year > 2015) {
  alert('Muy Tarde');
} else {
  alert('¡Exactamente!');
}
```

En el código de arriba, JavaScript primero revisa si `year < 2015`. Si esto es falso, continúa a la siguiente condición `year > 2015`. Si esta también es falsa, mostrará la última `alert`.

Podría haber más bloques `else if`. Y el último `else` es opcional.

## Ternario `?`

A veces necesitamos que el valor que asignemos a una variable dependa de alguna condición.

Por ejemplo:

```js
let accessAllowed;
let age = prompt('¿Qué edad tienes?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
```

El “operador condicional” nos permite ejecutar esto en una forma más corta y simple.

El operador está representado por el signo de cierre de interrogación `?`. A veces es llamado “ternario” porque el operador tiene tres operandos, es el único operador de JavaScript que tiene esa cantidad.

La Sintaxis es:

```js
let result = condition ? value1 : value2;
```

Se evalúa `condition`: si es verdadera entonces devuelve `value1`, de lo contrario `value2`.

Por ejemplo:

```js
let accessAllowed = age > 18 ? true : false;
```

## `switch`

Una sentencia `switch` puede reemplazar múltiples condiciones `if`.

Provee una mejor manera de comparar un valor con múltiples variantes.

### La sintaxis

`switch` tiene uno o mas bloques `case` y un opcional `default`.

Se ve de esta forma:

```js
const x = true;

switch (x) {
  case 'valor1': // if (x === 'valor1')
    //  ...
    break;

  case 'valor2': // if (x === 'valor2')
    //  ...
    break;

  default:
    //  ...
    break;
}
```

- El valor de `x` es comparado contra el valor del primer `case` (en este caso, `valor1`), luego contra el segundo (`valor2`) y así sucesivamente, todo esto bajo una igualdad estricta.
- Si la igualdad es encontrada, `switch` empieza a ejecutar el código iniciando por el primer `case` correspondiente, hasta el `break` más cercano (o hasta el final del `switch`).
- Si no se cumple ningún caso entonces el código `default` es ejecutado (si existe).

### Ejemplo

Un ejemplo de `switch` (se resalta el código ejecutado):

```js{7-9}
let a = 2 + 2;

switch (a) {
  case 3:
    alert('Muy pequeño');
    break;
  case 4:
    alert('¡Exacto!');
    break;
  case 5:
    alert('Muy grande');
    break;
  default:
    alert('Desconozco estos valores');
}
```

Aquí el `switch` inicia comparando `a` con la primera variante `case` que es `3`. La comparación falla.

Luego `4`. La comparación es exitosa, por tanto la ejecución empieza desde `case 4` hasta el `break` más cercano.

**Si no existe `break` entonces la ejecución continúa con el próximo `case` sin ninguna revisión.**

Un ejemplo sin `break`:

```js{6-11}
let a = 2 + 2;

switch (a) {
  case 3:
    alert('Muy pequeño');
  case 4:
    alert('¡Exacto!');
  case 5:
    alert('Muy grande');
  default:
    alert('Desconozco estos valores');
}
```

En el ejemplo anterior veremos ejecuciones de tres `alert` secuenciales:

```js
alert('¡Exacto!');
alert('Muy grande');
alert('Desconozco estos valores');
```

## Ejercicios

Para poner en práctica lo aprendido, resolvamos los siguientes [ejercicios](/exercises/ifelse.md)
