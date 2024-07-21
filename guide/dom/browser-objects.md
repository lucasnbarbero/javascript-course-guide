# Objetos del navegador

Hoy en día, los navegadores ofrecen diversas funciones y herramientas que permiten trabajar con audios, videos y formularios. Estas funcionalidades se encuentran integradas en objetos organizados en una estructura jerárquica dentro del navegador. Con el uso del lenguaje de programación JavaScript, es posible acceder y manipular estos objetos de manera sencilla.

El modelo de objetos del navegador o `BOM` _**(browser object model)**_, es el conjunto de objetos jerarquizados que permiten acceder a las funcionalidades que posee un navegador. `BOM` está compuesto por un esquema basado en nodos y objetos globales que comparten sus características a través de la cadena de prototipos.

En siguiente diagrama se muestra el modelo y su jerarquía.

![Diagrama del BOM](https://miro.medium.com/v2/resize:fit:720/format:webp/1*BOrKxXvuT63S1rkUT1hJVQ.png)

Los objetos principales del navegador son los siguientes:

- **Window**
- **Location**
- **History**
- **Navigator**
- **Document**

Estos objetos y sus propiedades/métodos permiten a los desarrolladores web crear páginas interactivas y dinámicas al interactuar con el contenido y el comportamiento de la página. La manipulación de estos objetos es esencial para el desarrollo front-end con JavaScript.

## `window`

El objeto `window` es el componente principal en la jerarquía del `BOM`, y representa la ventana completa del navegador. Con este objeto, puedes controlar y manipular la ventana del navegador en su totalidad. Esto incluye acciones como mover la ventana, cambiar su tamaño y posición, así como abrir y cerrar nuevas pestañas.

Entre las propiedades más utilizadas de `window` encontramos:

- **`innerHeight, innerWidth`**: Obtiene la altura o anchura, en píxeles, del espacio donde se visualiza propiamente la página. Es decir, el área visible del contenido de la ventana.

```js
const windowInnerHeight = window.innerHeight;
const windowInnerWidth = window.innerWidth;

console.log(`Altura interna de la ventana: ${windowInnerHeight}px`);
console.log(`Anchura interna de la ventana: ${windowInnerWidth}px`);
```

- **`outerHeight, outherWidth`**: Establece o devuelve el tamaño en pixels, del espacio de toda la ventana en vertical u horizontal, respectivamente. Es decir, el total de la ventana del navegador, incluyendo las barras de herramientas y bordes.

```js
const windowOuterHeight = window.outerHeight;
const windowOuterWidth = window.outerWidth;

console.log(`Altura externa de la ventana: ${windowOuterHeight}px`);
console.log(`Anchura externa de la ventana: ${windowOuterWidth}px`);
```

Algunos de los métodos más utilizados para la manipulación con `window` son los siguientes:

- **`open`**: open es un método que se utiliza para abrir una nueva ventana del navegador o una nueva pestaña, dependiendo de la configuración y el contexto del navegador.

```js
window.open('https://www.youtube.com/', '_blank');
// Abrir una pestaña nueva
```

Cuando se usa `_blank` como el segundo argumento en window.open, se garantiza que el URL especificado se abrirá en una nueva ventana o pestaña, independientemente de si existe ya una ventana o pestaña con ese nombre.

- **`close`**: close se utiliza para cerrar una ventana o pestaña del navegador. Este método es especialmente útil cuando has abierto una nueva ventana o pestaña utilizando window.open y deseas cerrarla posteriormente a través de un script.

```js
const page = window.open('https://www.example.com', '_blank');

// ...... código

page.close();
```

:::info Importante, antes de continuar🚨
_JavaScript_ tiene ciertos objetos y funciones que están disponibles globalmente sin necesidad de ser explícitamente asociados con el objeto `window`. Estos objetos y funciones se pueden usar directamente en cualquier parte del código, como por ejemplo los siguientes métodos que forman parte de `window`.
:::

- **`setInterval`**: La función `setInterval` se utiliza para ejecutar una función repetidamente a intervalos específicos de tiempo (en milisegundos).

```js
function myFunction1() {
  console.log('Esta función se ejecuta cada 2 segundos.');
}

setInterval(myFunction1, 2000);
```

- **`setTimeout`**: La función setTimeout ejecuta una función o una porción de código después de que haya transcurrido un intervalo de tiempo específico (en milisegundos).

```js
function myFunction2() {
  console.log('Esta función se ejecuta después de 5 segundos de retraso.');
}

setTimeout(myFunction2, 5000);
```

- **`console`**: El objeto console proporciona una interfaz para acceder a la consola de depuración del navegador. Este objeto tiene varios métodos que son extremadamente útiles para la depuración y el seguimiento de la ejecución de código.

```js
console.log('Hola');
console.warn('¡Advertencia! Este es un mensaje de advertencia.');
console.error('¡Error! Algo salió mal.');
console.info('Información');

const personas = [
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Carlos', edad: 32 },
  { nombre: 'Elena', edad: 28 },
];

console.table(personas);
```

## `location`

El objeto `location` en el navegador contiene información sobre la página web actual. Permite acceder a detalles como la URL completa, el nombre de dominio y el protocolo utilizado. Además, proporciona funcionalidades para redirigir a otras páginas y manipular la historia del navegador. Es una herramienta esencial para interactuar y obtener detalles específicos sobre la ubicación de la página web en la que se encuentra el usuario.

Entre las propiedades más utilizadas de `location` encontramos:

- `host`: El nombre del servidor.

```js
const host = location.host;
console.log('Nombre del servidor:', host);
```

- `href`: URL completa de la página actual.

```js
const url = location.href;
console.log('URL completa:', url);
```

- `port`: El puerto accedido.

```js
const port = location.port;
console.log('Puerto accedido:', port);
```

- `protocol`: El protocolo empleado por la URL.

```js
const protocol = location.protocol;
console.log('Protocolo empleado:', protocol);
```

- `search`: Todo el contenido que se encuentra a través de una query string.

```js
const searchQuery = location.search;
console.log('Contenido de la query string:', searchQuery);
```

Aquí los métodos más utilizados para la manipulación con `location`:

- `reload`: Forzar y recargar página.

```js
location.reload(true);
```

- `assign`: Redirecciones y comportamiento similares.

```js
location.assign('https://youtube.com');
```

## `history`

El objeto `history` brinda acceso al historial de navegación del usuario, es decir, a las páginas visitadas en la pestaña o marco de la página actual. `history` almacena estas páginas en una pila, lo que significa que puedes consultar, actualizar o manipular la historia de navegación según sea necesario. Este objeto es esencial para controlar la navegación del usuario y proporciona métodos para retroceder, avanzar o incluso cambiar dinámicamente la URL de la página sin recargarla por completo.

Aquí los métodos más utilizados para la manipulación con `history`:

- **forward**, **back** y **go**: Avanzar y retroceder en el historial.

```js
function simulateHistory() {
  console.log('Página actual: Página 1');

  history.forward();
  console.log('Después de avanzar: Página 2');

  // Retroceder a la Página 1
  history.back();
  console.log('Después de retroceder: Página 1');

  // Avanzar a la Página 3
  history.go(2);
  console.log('Después de avanzar dos páginas: Página 3');
}

simulateHistory();
```

## `navigator`

El objeto `navigator` almacena información sobre el agente de usuario que está visitando la página web. Con `navigator`, podemos obtener detalles del dispositivo actual, como su versión, ubicación geográfica, estado de la conexión de red, cantidad de memoria y otras características relacionadas con la configuración del usuario. Este objeto es esencial para adaptar y personalizar la experiencia del usuario según las capacidades y características específicas de su dispositivo y entorno de navegación.

El `User Agent` o agente de usuario, es una cadena de texto que identifica el software y la información del dispositivo que se utiliza para acceder a internet. En el contexto de navegadores web, el `User Agent` generalmente se refiere a la información que el navegador envía a los servidores web para identificarse. Esta información incluye detalles sobre el navegador (como Chrome, Firefox, Safari), la versión del navegador, el sistema operativo y, a veces, información adicional sobre el dispositivo.

Entre las propiedades más utilizadas de `navigator` encontramos:

Entre las propiedades más utilizadas de Navigatorencontramos:

- **userAgent**: Contiene información general del `User Agent`.

```js
console.log('User Agent:', navigator.userAgent);
```

- **language**: Contiene el idioma preferido del usuario establecido en la interfaz de usuario del navegador.

```js
console.log('Idioma preferido:', navigator.language);
```

- **connection**: Contiene información sobre la conexión de red del dispositivo.

```js
console.log(
  'Tipo de conexión:',
  navigator.connection ? navigator.connection.type : 'No disponible',
);
```

- **hardwareConcurrency**: Devuelve el número de núcleos de procesador lógico disponibles.

```js
console.log(
  'Número de núcleos de procesador lógico:',
  navigator.hardwareConcurrency || 'No disponible',
);
```

- **deviceMemory**: Devuelve la cantidad de memoria del dispositivo en gigabytes.

```js
console.log('Cantidad de memoria del dispositivo (GB):', navigator.deviceMemory || 'No disponible');
```

- **geolocation**: Devuelve un objeto que permite acceder a la ubicación del dispositivo.

```js
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log('Ubicación actual del dispositivo:', position.coords);
    },
    function (error) {
      console.error('Error al obtener la ubicación:', error.message);
    },
  );
} else {
  console.log('Geolocalización no disponible en este navegador.');
}
```

## `document`

El objeto `document` es una representación integral de toda la página web que se carga en el navegador. Contiene todos los elementos de la página, como la estructura HTML, imágenes, enlaces y formularios.