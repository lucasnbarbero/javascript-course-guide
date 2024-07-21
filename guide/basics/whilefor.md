# Bucles: `while` y `for`

Los bucles son una característica fundamental en la mayoría de los lenguajes de programación, incluido JavaScript. Permiten ejecutar un bloque de código repetidamente mientras se cumpla una condición específica.

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

## Ejercicios

Para poner en práctica lo aprendido, resolvamos los siguientes [ejercicios](/exercises/loops.md)
