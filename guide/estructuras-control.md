# Estructuras de control

# Estructuras de Control de Flujo

Las estructuras de control de flujo en JavaScript permiten que el código se ejecute de manera condicional o repetitiva, según ciertas condiciones. Estas estructuras son fundamentales para escribir programas dinámicos y eficientes, ya que controlan cómo y cuándo se ejecutan diferentes partes del código.

Existen varios tipos de estructuras de control de flujo en JavaScript:

- **Condicionales**: Permiten que se ejecute un bloque de código u otro dependiendo de si una condición es verdadera o falsa. Las estructuras condicionales más comunes son `if`, `else if`, `else` y `switch`.

- **Bucles**: Permiten ejecutar un bloque de código repetidamente mientras una condición sea verdadera o durante un número específico de veces. Los bucles más comunes son `for`, `while` y `do while`.

Estas estructuras son esenciales para realizar tareas como iterar sobre elementos de un array, ejecutar diferentes acciones basadas en la entrada del usuario, y mucho más. A continuación, veremos cada una de estas estructuras en detalle, con ejemplos prácticos de cómo utilizarlas en tus programas JavaScript.

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

## `while`

El bucle `while` (mientras) tiene la siguiente sintaxis:

```js
while (condition) {
  // código
  // llamado "cuerpo del bucle"
}
```

Mientras la condición `condition` sea verdadera, el código del cuerpo del bucle será ejecutado.

Por ejemplo, el bucle debajo imprime `i` mientras se cumpla `i < 3`:

```js
let i = 0;
while (i < 3) {
  // muestra 0, luego 1, luego 2
  alert(i);
  i++;
}
```

Cada ejecución del cuerpo del bucle se llama _iteración_. El bucle en el ejemplo de arriba realiza 3 iteraciones.

Si faltara `i++` en el ejemplo de arriba, el bucle sería repetido (en teoría) eternamente. En la práctica, el navegador tiene maneras de detener tales bucles desmedidos; y en el JavaScript del lado del servidor, podemos eliminar el proceso.

Cualquier expresión o variable puede usarse como condición del bucle, no solo las comparaciones: El `while` evaluará y transformará la condición a un booleano.

Por ejemplo, una manera más corta de escribir `while (i != 0)` es `while (i)`:

```js{2}
let i = 3;
while (i) {
  // cuando i sea 0, la condición se volverá falsa y el bucle se detendrá
  alert(i);
  i--;
}
```

## `do...while`

La comprobación de la condición puede ser movida debajo del cuerpo del bucle usando la sintaxis `do...while`:

```js
do {
  // cuerpo del bucle
} while (condition);
```

El bucle primero ejecuta el cuerpo, luego comprueba la condición, y, mientras sea un valor verdadero, la ejecuta una y otra vez.

Por ejemplo:

```js
let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);
```

Esta sintaxis solo debe ser usada cuando quieres que el cuerpo del bucle sea ejecutado **al menos una vez** sin importar que la condición sea verdadera. Usualmente, se prefiere la otra forma: `while(...) {...}`.

## `for`

El bucle `for` es más complejo, pero también el más usado.

Se ve así:

```js
for (begin; condition; step) {
  // (comienzo, condición, paso)
  // ... cuerpo del bucle ...
}
```

Aprendamos el significado de cada parte con un ejemplo. El bucle debajo corre `alert(i)` para `i` desde `0` hasta (pero no incluyendo) `3`:

```js
for (let i = 0; i < 3; i++) {
  // muestra 0, luego 1, luego 2
  alert(i);
}
```

Vamos a examinar la declaración for parte por parte:

| Etapa     | Código      | Descripción                                                                   |
| --------- | ----------- | ----------------------------------------------------------------------------- |
| comienzo  | `let i = 0` | Se ejecuta una vez al comienzo del bucle.                                     |
| condición | `i < 3`     | Comprobada antes de cada iteración del bucle. Si es falsa, el bucle finaliza. |
| cuerpo    | `alert(i)`  | Se ejecuta una y otra vez mientras la condición sea verdadera.                |
| paso      | `i++`       | Se ejecuta después del cuerpo en cada iteración.                              |

### Rompiendo el bucle

Normalmente, se sale de un bucle cuando la condición se vuelve falsa.

Pero podemos forzar una salida en cualquier momento usando la directiva especial `break`.

Por ejemplo, el bucle debajo le pide al usuario por una serie de números, "rompiéndolo" cuando un número no es ingresado:

```js{6}
let sum = 0;

while (true) {
  let value = +prompt('Ingresa un número', '');

  if (!value) break; // (*)

  sum += value;
}
alert('Suma: ' + sum);
```

La directiva `break` es activada en la línea `(*)` si el usuario ingresa una línea vacía o cancela la entrada. Detiene inmediatamente el bucle, pasando el control a la primera línea después de el bucle. En este caso, `alert`.

La combinación "bucle infinito + `break` según sea necesario" es ideal en situaciones donde la condición del bucle debe ser comprobada no al inicio o al final de el bucle, sino a la mitad o incluso en varias partes del cuerpo.

### Continuar a la siguiente iteración

La directiva `continue` es una "versión más ligera" de `break`. No detiene el bucle completo. En su lugar, detiene la iteración actual y fuerza al bucle a comenzar una nueva (si la condición lo permite).

Podemos usarlo si hemos terminado con la iteración actual y nos gustaría movernos a la siguiente.

El bucle debajo usa `continue` para mostrar solo valores impares:

```js
for (let i = 0; i < 10; i++) {
  // si es verdadero, saltar el resto del cuerpo
  if (i % 2 == 0) continue;

  alert(i); // 1, luego 3, 5, 7, 9
}
```

Para los valores pares de i, la directiva continue deja de ejecutar el cuerpo y pasa el control a la siguiente iteración de for (con el siguiente número). Así que el alert solo es llamado para valores impares.
