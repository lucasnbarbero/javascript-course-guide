# Cookies

Las cookies son pequeños archivos de texto que los sitios web almacenan en el navegador del usuario. Estas cookies pueden ser utilizadas para guardar información sobre las preferencias del usuario, gestionar sesiones, y almacenar datos importantes entre sesiones de navegación. En este capítulo, exploraremos cómo trabajar con cookies en JavaScript, cómo crearlas, leerlas y eliminarlas.

## ¿Qué es una cookie?

Una cookie es un pequeño fragmento de datos que se envía desde un servidor web y se almacena en el navegador del usuario. Las cookies permiten que los sitios web recuerden información sobre el usuario para que no tenga que ingresar los mismos datos repetidamente.

## Cómo trabajar con Cookies en JavaScript

### Crear una Cookie

Para crear una cookie, se utiliza la propiedad `document.cookie`. A esta propiedad se le asigna una cadena con el formato adecuado que incluye el nombre, valor, y opciones adicionales como la fecha de expiración.

```js
// Crear una cookie que expira en 7 días
function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

// Ejemplo de uso
setCookie('usuario', 'Lucas', 7);
```

### Leer una Cookie

Para leer el valor de una cookie, se puede utilizar `document.cookie` y luego analizar la cadena para encontrar el valor deseado.

```js
// Leer el valor de una cookie
function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Ejemplo de uso
const usuario = getCookie('usuario');
console.log('Usuario:', usuario);
```

### Eliminar una Cookies

Para eliminar una cookie, se debe establecer la fecha de expiración en una fecha pasada.

```js
// Eliminar una cookie
function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

// Ejemplo de uso
eraseCookie('usuario');
```

## Propiedades de las Cookies

Al configurar cookies, puedes utilizar varias opciones para controlar su comportamiento:

- `expires`: Especifica la fecha de expiración de la cookie. Si no se especifica, la cookie se eliminará cuando se cierre el navegador.
- `path`: Define el ámbito de la cookie. Por defecto, la cookie se aplica a la ruta del documento que la creó.
- `domain`: Establece el dominio para el cual la cookie es válida.
- `secure`: Indica que la cookie solo debe ser transmitida a través de una conexión segura (HTTPS).

## Ejemplo completo

Aquí tienes un ejemplo completo que combina la creación, lectura y eliminación de cookies:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ejemplo de Cookies</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        margin: 20px;
      }
      button {
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <h1>Ejemplo de Cookies en JavaScript</h1>
    <button onclick="setCookie('usuario', 'Lucas', 7)">Crear Cookie</button>
    <button onclick="alert('Cookie Usuario: ' + getCookie('usuario'))">Leer Cookie</button>
    <button onclick="eraseCookie('usuario')">Eliminar Cookie</button>

    <script>
      function setCookie(name, value, days) {
        let expires = '';
        if (days) {
          const date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
      }

      function getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      }

      function eraseCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
      }
    </script>
  </body>
</html>
```
