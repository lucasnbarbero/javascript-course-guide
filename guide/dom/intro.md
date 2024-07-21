# ¿Qué es el DOM?

Las siglas **DOM** significan **Document Object Model**, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí.

![arbol_html](https://lenguajejs.com/javascript/dom/que-es/que-es-dom.png)

En Javascript, cuando nos referimos al DOM nos referimos a esta estructura de árbol, mediante la cuál podemos acceder a ella y modificar los elementos del HTML desde Javascript, añadiendo nuevas etiquetas, modificando o eliminando otras, cambiando sus atributos HTML, añadiendo clases, cambiando el contenido de texto, etc...

## Objeto `document`

En Javascript, la forma de acceder al DOM es a través de un objeto llamado document, que representa el árbol DOM de la página o, más concretamente, la página de la pestaña del navegador donde nos encontramos. En su interior pueden existir varios tipos de elementos, pero principalmente serán **Element (Elemento)** o **Node (Nodo)**:

- _**Element**_ no es más que la representación genérica de una etiqueta: `HTMLElement`.
- _**Node**_ es una unidad más básica, la cuál puede ser `element` o un nodo de texto.

Todos los elementos HTML, dependiendo del elemento que sean, tendrán un tipo de dato específico. Algunos ejemplos:

| Tipo de dato genérico | Tipo específico    | Etiqueta  | Descripción                    | + info             |
| --------------------- | ------------------ | --------- | ------------------------------ | ------------------ |
| `HTMLElement`         | `HTMLDivElement`   | `<div>`   | Etiqueta divisoria (en bloque) | Elemento `<div>`   |
| `HTMLElement`         | `HTMLSpanElement`  | `<span>`  | Etiqueta divisoria (en línea)  | Elemento `<span>`  |
| `HTMLElement`         | `HTMLImageElement` | `<img>`   | Imagen                         | Elemento `<img>`   |
| `HTMLElement`         | `HTMLAudioElement` | `<audio>` | Contenedor de audio            | Elemento `<audio>` |

Obviamente, existen muchos tipos de datos específicos, uno por cada etiqueta HTML.

## API Nativa de JavaScript

La API nativa del DOM en JavaScript es un conjunto de interfaces y métodos que permiten a los programas JavaScript interactuar con la estructura de un documento HTML. Básicamente, proporciona una forma de acceder y manipular los elementos de una página web de manera dinámica, lo que permite crear experiencias interactivas para el usuario.

## Seleccionar elementos

Si nos encontramos en nuestro código Javascript y queremos hacer modificaciones en un elemento de la página HTML, lo primero que debemos hacer es buscar dicho elemento. Para ello, se suele intentar identificar el elemento a través de alguno de sus atributos más utilizados, generalmente el id o class.

Existen una serie de métodos que nos permitirán buscar en el DOM de la página y encontrar dichos elementos. El primer grupo son métodos más antiguos y tradicionales, el segundo grupo son métodos más modernos, pero requieren conocer selectores CSS.

### Métodos tradicionales

Los métodos más clásicos y tradicionales para realizar búsquedas de elementos en el DOM son más sencillos, pero menos potentes. Si lo que buscas es un elemento específico, lo mejor sería utilizar el método `getElementById()`. En caso contrario, utilizaremos alguno de los otros tres métodos, que nos devuelven siempre un `array`

| Métodos de búsqueda              | Descripción                                   | Si lo encuentra... | Si no lo encuentra... |
| -------------------------------- | --------------------------------------------- | ------------------ | --------------------- |
| `.getElementById(id)`            | Busca el elemento HTML por su id.             | Devuelve `Element` | Devuelve `null`       |
| `.getElementsByClassName(class)` | Busca elementos con la clase class.           | Devuelve `array`   | Devuelve `[]`         |
| `.getElementsByName(value)`      | Busca elementos con el atributo name a value. | Devuelve `array`   | Devuelve `[]`         |
| `.getElementsByTagName(tag)`     | Busca etiquetas HTML tag.                     | Devuelve `array`   | Devuelve `[]`         |

Estos son los **4 métodos tradicionales** de Javascript para manipular el DOM. Se denominan tradicionales porque son los que existen en Javascript desde versiones más antiguas.

### `getElementById()`

El primer método, `.getElementById(id)` busca un elemento HTML con el `id` especificado. En principio, un documento HTML bien construído **no debería** tener más de un elemento con el mismo `id`, por lo tanto, este método devolverá siempre un solo elemento:

```js
const page = document.getElementById('page');
```

### `.getElementsByClassName()`

Por otro lado, el método `.getElementsByClassName(class)` permite buscar los elementos que tengan la clase especificada en `class`. Es importante darse cuenta del matiz de que el método tiene `getElements` en plural, es decir, puede devolver **varias clases** ya que al contrario que los `id`, pueden existir varios elementos con la misma clase:

```js
const items = document.getElementsByClassName('item'); // [div, div, div]

console.log(items[0]); // Primer item encontrado: <div class="item"></div>
console.log(items.length); // 3
```

:::tip
Exactamente igual funcionan los métodos `getElementsByName(name)` y `getElementsByTagName(tag)`, salvo que se encargan de buscar elementos HTML por su atributo name o por su propia etiqueta de elemento HTML, respectivamente

```js
// Obtiene todos los elementos con atributo name="nickname"
const nicknames = document.getElementsByName('nickname'); // [input]

// Obtiene todos los elementos <div> de la página
const divs = document.getElementsByTagName('div'); // [div, div, div]
```

:::

## Crear elementos

Existe una serie de métodos para crear de forma eficiente diferentes elementos HTML o nodos. Dichos métodos nos ofrecen una forma muy sencilla de crear estructuras dinámicas, mediante bucles o estructuras definidas.

Veamos el mas usado:

### `createElement()`

Mediante el método `.createElement()` podemos crear un HTML en memoria **(¡no estará insertado aún en nuestro documento HTML!)**. Con dicho elemento almacenado en una variable o constante, podremos modificar sus características o contenido, para posteriormente insertarlo en una posición determinada del DOM o documento HTML.

```js
const div = document.createElement('div'); // Creamos un <div></div>
const span = document.createElement('span'); // Creamos un <span></span>
const img = document.createElement('img'); // Creamos un <img>
```

## Insertar elementos

Aunque mediante propiedades como `.innerHTML` podemos insertar elementos en el DOM de un documento HTML, en muchas ocasiones quizás no es la mejor forma.

### `.appendChild()`

Uno de los métodos más comunes para añadir un elemento HTML creado con Javascript es `.appendChild()`. Como su propio nombre indica, este método añade o inserta un nuevo elemento, como si fuera un hijo al final de todos los hijos del elemento sobre el que se realiza.

Observa el siguiente fragmento de código:

```js
const container = document.querySelector('.container');

const img = document.createElement('img');
img.src = 'https://lenguajejs.com/assets/logo.svg';
img.alt = 'Logo Javascript';

container.appendChild(img);
```

En este ejemplo, creamos un elemento `<img>` que aún no está conectado al DOM de la página. Existe sólo en la constante `<img>`. Posteriormente, añadimos los atributos `src` y `alt` y lo conectamos al DOM el elemento usando el método `.appendChild()`.

Se insertará como último hijo del elemento `<body>`, ya que es su comportamiento predefinido.
