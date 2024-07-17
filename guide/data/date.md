# Fecha y hora

En muchas ocasiones necesitaremos guardar o trabajar con fechas en nuestros programas. Una fecha tiene datos mixtos: día, mes y año, pero también puede ser más precisa y tener hora, minutos y/o segundos. Además, la hora puede estar en varios y múltiples formatos.

En principio, toda esta información no sería cómodo guardarla en formato de texto, ya que posteriormente nos gustaría trabajar y realizar operaciones con ellas (sumarle días, obtener el mes, obtener la hora, etc...). Así pues, tenemos un objeto llamado `Date` que nos vendrá muy bien para operaciones relacionadas con fechas.

_Javascript_ nos provee de un tipo de dato llamado Date, con el que podemos trabajar de forma fácil y práctica con fechas. Sin embargo, trabajar con fechas no es fácil y la primera vez que tenemos que hacerlo es muy sencillo equivocarse si no tenemos claros ciertos conceptos.

## Creación de fechas

Para crear un nuevo objeto `Date` se lo instancia con `new Date()` junto con uno de los siguientes argumentos

### `new Date()`

Sin argumentos – crea un objeto Date para la fecha y la hora actuales:

```js
let now = new Date();
alert(now); // muestra en pantalla la fecha y la hora actuales
```

### `new Date(milliseconds)`

Crea un objeto `Date` con la cantidad de tiempo igual al número de milisegundos (1/1000 de un segundo) transcurrido a partir del 1° de enero de 1970 UTC+0.

```js
// 0 significa 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert(Jan01_1970);

// ahora se le agregan 24 horas, se obtiene 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert(Jan02_1970);
```

Un _timestamp_ es un número entero que representa la cantidad de milisegundos transcurridos desde el inicio de 1970.

Este _timestamp_ es una representación numérica liviana de una fecha. Es posible crear una fecha a partir de un _timestamp_ usando `new Date(timestamp)`, y convertir el objeto `Date` actual a un _timestamp_ utilizando el método `date.getTime()`.

Las fechas anteriores a 01.01.1970 tienen _timestamps_ negativos, por ejemplo:

```js
// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert(Dec31_1969);
```

### `new Date(datestring)`

Si se pasa un único argumento, y es de tipo string, entonces es analizado y convertido a fecha automáticamente. El algoritmo es el mismo que el que utiliza `Date.parse`, lo veremos mas en detalle luego.

```js
let date = new Date('2022-12-18');
alert(date);
// La hora no está definida, por lo que se asume que es la medianoche GMT (0 hs. de la fecha) y
// se ajusta de acuerdo al huso horario de la zona geográfica en la que está ejecutándose el código.
// Por consiguiente, el resultado podría ser
// Thu Jan 26 2017 11:00:00 GMT+1100 (Hora Estándar del Este de Australia)
// o
// Wed Jan 25 2017 16:00:00 GMT-0800 (Hora Estándar del Pacífico)
```

### `new Date(año, mes, fecha, horas, minutos, segundos, ms)`

Crea una fecha con los componentes pasados como argumentos en la zona horaria local. Sólo los primeros dos parámetros son obligatorios.

- El `año` debería tener 4 dígitos. Por compatibilidad, aquí 2 dígitos serán considerados ‘19xx’, pero 4 dígitos es lo firmemente sugerido.
- La cuenta del `mes` comienza desde el `0` (enero), y termina en el `11` (diciembre).
- El parámetro `fecha` efectivamente es el día del mes, si está ausente se asume su valor en 1.
- Si los parámetros `horas/minutos/segundos/ms` están ausentes, se asumen sus valores iguales a `0`.

Por ejemplo:

```js
new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // Igual que la línea de arriba, sólo que a los últimos 4 parámetros se les asigna '0' por defecto.
```

La precisión máxima es de 1 ms (1/1000 de segundo):

```js
let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert(date); // 1.01.2011, 02:03:04.567
```

## Acceso a los componentes de fecha

Existen métodos que sirven para obtener el año, el nes y los demás componentes a partir de un objeto de tipo `Date`:

- **`getFullYear()`** Devuelve el año (4 dígitos)
  :::warning No `getYear()`, sino `getFullYear()`
  Algunos motores de _JavaScript_ poseen implementado un método no estándar llamado `getYear()`. Este método actualmente está obsoleto. A veces devuelve un año de 2 dígitos. Por favor, nunca lo uses. Usa `getFullYear()` para obtener el año.
  :::
- **`getMonth()`** Devuelve el mes, de 0 a 11.
- **`getDate()`** Devuelve el día del mes desde 1 a 31. _Nótese que el nombre del método no es muy intuitivo._
- **`getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`** Devuelve los componentes del horario correspondientes.
- **`getDay()`** Devuelve el día de la semana, partiendo de 0 (Domingo) hasta 6 (Sábado). El primer día siempre es el Domingo. Por más que en algunos países no sea así, no se puede modificar.

:::details Nota
**Todos los métodos mencionados anteriormente devuelven los componentes correspondientes a la zona horaria local.**
:::

## Estableciendo los componente de la fecha

Los siguientes métodos permiten establecer los componentes de fecha y hora:

- [setFullYear(year, [month], [date])](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear)
- [setMonth(month, [date])](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth)
- [setDate(date)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)
- [setHours(hour, [min], [sec], [ms])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours)
- [setMinutes(min, [sec], [ms])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes)
- [setSeconds(sec, [ms])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds)
- [setMilliseconds(ms)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds)
- [setTime(milliseconds)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime) (Establece la cantidad de segundos transcurridos desde 01.01.1970 GMT+0)

Como podemos ver, algunos métodos nos permiten fijar varios componentes al mismo tiempo, por ej. `setHours`. Los componentes que no son mencionados no se modifican.

```js
let today = new Date();

today.setHours(0);
alert(today); // Sigue siendo el día de hoy, pero con la hora cambiada a 0.

today.setHours(0, 0, 0, 0);
alert(today); // Sigue siendo la fecha de hoy, pero ahora en formato 00:00:00 en punto.
```

## Conversión a números

Cuando convertimos un objeto `Date` a número toma el valor del _timestamp_ actual, al igual que el método `date.getTime()`:

```js
let date = new Date();
alert(+date); // devuelve el número de milisegundos, al igual que date.getTime()
```

El efecto secundario importante: las fechas pueden ser restadas, el resultado es su diferencia en ms.

Esto puede ser usado para medición de tiempo:

```js
let start = new Date(); // comienza a medir el tiempo (valor inicial)

// la función hace su trabajo
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // termina de medir el tiempo (valor final)

alert(`El tiempo transcurrido es de ${end - start} ms`);
```

## `Date.now()`

Si lo único que queremos es medir el tiempo transcurrido, no es necesario utilizar el objeto `Date`.

Podemos utilizar el método especial `Date.now()` que nos devuelve el timestamp actual.

Es el equivalente semántico a `new Date().getTime()`, pero no crea una instancia intermediaria del objeto `Date`. De esta manera, el proceso es mas rápido y, por consiguiente, no afecta a la recolección de basura.

Mayormente se utiliza por conveniencia o cuando la performance del código es fundamental, como por ejemplo en juegos de JavaScript u otras aplicaciones específicas.

Por lo tanto, es mejor hacerlo de esta manera:

```js
let start = Date.now(); // milisegundos transcurridos a partir del 1° de Enero de 1970

// la función realiza su trabajo
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // listo

alert(`El bucle tardó ${end - start} ms`); // restamos números en lugar de fechas
```

## `Date.parse()`

El método `Date.parse(str)` permite leer una fecha desde un string.

El formato del string debe ser: `YYYY-MM-DDTHH:mm:ss.sssZ`, donde:

- `YYYY-MM-DD` – es la fecha: año-mes-día.
- El carácter `"T"` se usa como delimitador.
- `HH:mm:ss.sss` – es la hora: horas, minutos, segundos y milisegundos.
- El carácter `'Z'` es opcional y especifica la zona horaria, con el formato `+-hh:mm`. Si se incluye únicamente la letra `Z` equivale a UTC+0.

También es posible pasar como string variantes abreviadas, tales como `YYYY-MM-DD` o `YYYY-MM` o incluso `YYYY`.

La llamada del método `Date.parse(str)` convierte el string en el formato especificado y nos devuelve un timestamp (cantidad de milisegundos transcurridos desde el 1° de Enero de 1970 UTC+0). Si el formato del string no es válido, devuelve es `NaN`.

Por ejemplo:

```js
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417  (timestamp)
```

Podemos crear un objeto `new Date` instantáneamente desde el _timestamp_:

```js
let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));

alert(date);
```

## Resumen

- En JavaScript, la fecha y la hora se representan con el objeto Date. No es posible obtener sólo la fecha o sólo la hora: los objetos `Date` incluyen ambas.
- Los meses se cuentan desde el cero (sí: enero es el mes cero).
- Los días de la semana en `getDay()` también se cuentan desde el cero (que corresponde al día Domingo).
- Las fechas se pueden restar entre sí, dando el resultado expresado en milisegundos: esto se debe a que el objeto `Date` toma el valor del _timestamp_ cuando es convertido a número.
- Para obtener el _timestamp_ actual de manera inmediata se utiliza `Date.now()`.
