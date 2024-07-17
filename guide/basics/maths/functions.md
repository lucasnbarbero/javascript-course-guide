# Funciones matemáticas

Cuando trabajamos con Javascript, es posible realizar gran cantidad de **operaciones matemáticas** de forma nativa, sin necesidad de librerías externas. Para ello, haremos uso del objeto _**Math**_, un objeto interno de Javascript que tiene incorporadas ciertas constantes y métodos (funciones) para trabajar matemáticamente.

## Constantes de `Math`

El objeto `Math` de Javascript incorpora varias constantes que podemos necesitar en algunas operaciones matemáticas. Veamos su significado y valor aproximado:

| Constante      | Descripción                        | Valor              |
| -------------- | ---------------------------------- | ------------------ |
| `Math.E`       | Número de Euler                    | 2.718281828459045  |
| `Math.LN2`     | Equivalente a `Math.log(2)`        | 0.6931471805599453 |
| `Math.LN10`    | Equivalente a `Math.log(10)`       | 2.302585092994046  |
| `Math.LOG2E`   | Equivalente a `Math.log2(Math.E)`  | 1.4426950408889634 |
| `Math.LOG10E`  | Equivalente a `Math.log10(Math.E)` | 0.4342944819032518 |
| `Math.PI`      | Número PI                          | 3.141592653589793  |
| `Math.SQRT1_2` | Equivalente a `Math.sqrt(1/2)`     | 0.7071067811865476 |
| `Math.SQRT2`   | Equivalente a `Math.sqrt(2)`       | 1.4142135623730951 |

## Métodos de `Math`

Los siguientes métodos matemáticos están disponibles en Javascript a través del objeto `Math`:

| Método                 | Descripción                                                           | Ejemplo  |
| ---------------------- | --------------------------------------------------------------------- | -------- |
| `Math.abs(x)`          | Devuelve el valor absoluto de `x`.                                    | \|x\|    |
| `Math.sign(x)`         | Devuelve el signo del número: `1` positivo, `-1` negativo             |          |
| `Math.exp(x)`          | Exponenciación. Devuelve el número e elevado a x.                     | e^x      |
| `Math.expm1(x)`        | Equivalente a `Math.exp(x) - 1`.                                      | e^x - 1  |
| `Math.max(a, b, c...)` | Devuelve el número más grande de los indicados por parámetro.         |          |
| `Math.min(a, b, c...)` | Devuelve el número más pequeño de los indicados por parámetro.        |          |
| `Math.pow(base, exp)`  | Potenciación. Devuelve el número base elevado a exp.                  | base^exp |
| `Math.sqrt(x)`         | Devuelve la raíz cuadrada de `x`.                                     | √x       |
| `Math.cbrt(x)`         | Devuelve la raíz cúbica de `x`.                                       | ∛x       |
| `Math.imul(a, b)`      | Equivalente a `a * b`, pero a nivel de bits.                          |          |
| `Math.clz32(x)`        | Devuelve el número de ceros a la izquierda de x en binario (32 bits). |          |

Veamos algunos ejemplos aplicados a las mencionadas funciones anteriormente:

```js
Math.abs(-5); // 5
Math.sign(-5); // -1
Math.exp(1); // e, o sea, 2.718281828459045
Math.expm1(1); // 1.718281828459045
Math.max(1, 40, 5, 15); // 40
Math.min(5, 10, -2, 0); // -2
Math.pow(2, 10); // 1024 (Equivale a 2**10)
Math.sqrt(2); // 1.4142135623730951 (Equivale a Math.SQRT2)
Math.cbrt(2); // 1.2599210498948732
Math.imul(0xffffffff, 7); // -7

// Ejemplo de clz32 (count leading zeros)
const x = 1;
"0".repeat(Math.clz32(x)) + x.toString(2);
// Devuelve "00000000000000000000000000000001"
```

## `Math.random()`

Uno de los métodos más útiles e interesantes del objeto `Math` es `Math.random()`.

Este método nos da un número al azar entre los valores `0` y `1`, con 16 decimales. Normalmente, cuando queremos trabajar con números aleatorios, lo que buscamos es obtener un número entero al azar entre `a` y `b`. Para ello, se suele hacer lo siguiente:

```js
// Obtenemos un número al azar entre (0, 1) con 16 decimales
let x = Math.random();

// Multiplicamos dicho número por el valor máximo que buscamos (5)
x = x * 5;

// Redondeamos inferiormente, quedándonos sólo con la parte entera
x = Math.floor(x);
```

## Métodos de redondeo

Como hemos visto anteriormente, es muy común necesitar métodos para redondear números y reducir el número de decimales o aproximar a una cifra concreta. Para ello, de forma nativa, Javascript proporciona los siguientes métodos de redondeo:

| Método           | Descripción                                             |
| ---------------- | ------------------------------------------------------- |
| `Math.round(x)`  | Devuelve x con redondeo (el entero más cercano)         |
| `Math.ceil(x)`   | Devuelve x con redondeo superior (el entero más alto)   |
| `Math.floor(x)`  | Devuelve x con redondeo inferior (el entero más bajo)   |
| `Math.fround(x)` | Devuelve x con redondeo (flotante con precisión simple) |
| `Math.trunc(x)`  | Trunca el número x (devuelve sólo la parte entera)      |

Veamos las diferencias de utilizar los diferentes **métodos** anteriores para redondear un número decimal y los resultados obtenidos:

```js
// Redondeo natural, el más cercano
Math.round(3.75); // 4
Math.round(3.25); // 3

// Redondeo superior (el más alto)
Math.ceil(3.75); // 4
Math.ceil(3.25); // 4

// Redondeo inferior (el más bajo)
Math.floor(3.75); // 3
Math.floor(3.25); // 3

// Redondeo con precisión
Math.round(3.123456789); // 3
Math.fround(3.123456789); // 3.1234567165374756

// Truncado (sólo parte entera)
Math.trunc(3.75); // 3
Math.round(-3.75); // -4
Math.trunc(-3.75); // -3
```
