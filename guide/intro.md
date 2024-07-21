# Introducción a JavaScript

_JavaScript_ fue creado para "_dar vida a las páginas web_".

Los programas en este lenguaje se llaman **_scripts_**. Se pueden escribir directamente en el HTML de una página web y ejecutarse automáticamente a medida que se carga la página.

Los scripts se proporcionan y ejecutan como texto plano. No necesitan preparación especial o compilación para correr.

Hoy, JavaScript puede ejecutarse no solo en los navegadores, sino también en servidores o incluso en cualquier dispositivo que cuente con un programa especial llamado [El motor o intérprete de JavaScript](https://es.wikipedia.org/wiki/Int%C3%A9rprete_de_JavaScript).

El navegador tiene un motor embebido a veces llamado una **Máquina virtual de JavaScript**.

Diferentes motores tienen diferentes “nombres en clave”. Por ejemplo:

- [V8](<https://es.wikipedia.org/wiki/V8_(int%C3%A9rprete_de_JavaScript)>) – en Chrome, Opera y Edge.
- [SpiderMonkey](https://es.wikipedia.org/wiki/SpiderMonkey) – en Firefox.
- Existen otros nombres en clave como “Chakra” para IE , “JavaScriptCore”, “Nitro” y “SquirrelFish” para Safari, etc.

Es bueno recordar estos términos porque son usados en artículos para desarrolladores en internet. También los usaremos. Por ejemplo, si “la característica X es soportada por V8”, entonces probablemente funciona en Chrome, Opera y Edge.

## ¿Qué puede hacer JavaScript en el navegador?

El JavaScript moderno es un lenguaje de programación **seguro**. No proporciona acceso de bajo nivel a la memoria ni a la CPU; ya que se creó inicialmente para los navegadores, los cuales no lo requieren.

Las capacidades de JavaScript dependen en gran medida en el entorno en que se ejecuta. Por ejemplo, [Node.JS](https://es.wikipedia.org/wiki/Node.js) soporta funciones que permiten a JavaScript leer y escribir archivos arbitrariamente, realizar solicitudes de red, etc.

En el navegador JavaScript puede realizar cualquier cosa relacionada con la manipulación de una página web, interacción con el usuario y el servidor web.

Por ejemplo, en el navegador JavaScript es capaz de:

- Agregar nuevo HTML a la página, cambiar el contenido existente y modificar estilos.
- Reaccionar a las acciones del usuario, ejecutarse con los clics del ratón, movimientos del puntero y al oprimir teclas.
- Enviar solicitudes de red a servidores remotos, descargar y cargar archivos (Tecnologías llamadas [AJAX](https://es.wikipedia.org/wiki/AJAX) y [COMET](https://es.wikipedia.org/wiki/Comet)).
- Obtener y configurar cookies, hacer preguntas al visitante y mostrar mensajes.
- Recordar datos en el lado del cliente con el almacenamiento local (“local storage”).

## Intregración con HTML y CSS

JavaScript se integra directamente en HTML utilizando la etiqueta `<script>`. Esto permite que los scripts JavaScript manipulen dinámicamente el contenido HTML y los estilos CSS de una página web.

### Integración con HTML

Puedes agregar JavaScript a una página web mediante la etiqueta `<script>` dentro del documento HTML. Por ejemplo:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Ejemplo de Integración de JavaScript</title>
    <script>
      // Aquí puedes escribir tu código JavaScript
      console.log('¡Hola, mundo desde JavaScript!');
    </script>
  </head>
  <body>
    <h1>Integración de JavaScript</h1>
    <p>JavaScript permite hacer que esta página sea interactiva.</p>
  </body>
</html>
```

### Integración con CSS

JavaScript también puede manipular los estilos CSS de elementos HTML para cambiar su apariencia o comportamiento. Por ejemplo:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Ejemplo de Manipulación de Estilos con JavaScript</title>
    <style>
      .resaltado {
        color: red;
      }
    </style>
    <script>
      // JavaScript puede modificar los estilos CSS
      document.getElementById('miParrafo').classList.add('resaltado');
    </script>
  </head>
  <body>
    <p id="miParrafo">Este párrafo será resaltado por JavaScript.</p>
  </body>
</html>
```
