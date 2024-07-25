# Formularios

Los formularios en HTML son una parte fundamental de las aplicaciones web, ya que permiten a los usuarios enviar datos a un servidor. Los controles de formulario HTML proporcionan una variedad de elementos que permiten capturar diferentes tipos de datos, desde texto y números hasta fechas y selecciones. En este capítulo, exploraremos los elementos y atributos principales de los formularios HTML, así como algunos ejemplos de cómo utilizarlos para crear interfaces de usuario interactivas y eficientes.

## Estructura básica

Un formulario HTML se define utilizando el elemento `<form>`. Dentro de este elemento, se colocan los distintos controles de formulario que el usuario utilizará para ingresar datos. El formulario puede incluir botones para enviar o resetear los datos.

```html
<form action="/submit" method="post">
  <!-- Controles del formulario aquí -->
  <button type="submit">Enviar</button>
</form>
```

### Atributos del Formulario

- `action`: Especifica la URL a la que se enviarán los datos del formulario cuando se envíe.
- `method`: Define el método HTTP utilizado para enviar los datos del formulario, típicamente GET o POST.

## Controles de formulario HTML

### Campo de texto

El elemento `<input>` con el tipo `text` se utiliza para capturar texto de una sola línea.

```html
<label for="name">Nombre:</label>
<input type="text" id="name" name="name" placeholder="Ingrese su nombre" />
```

### Área de texto

El elemento `<textarea>` se utiliza para capturar texto de múltiples líneas.

```html
<label for="message">Mensaje:</label>
<textarea
  id="message"
  name="message"
  rows="4"
  cols="50"
  placeholder="Ingrese su mensaje"
></textarea>
```

### Botón de envío

El elemento `<button>` o `<input>` con el tipo `submit` se utiliza para enviar el formulario.

```html
<button type="submit">Enviar</button>
```

### Casilla de Verificación (Checkbox)

El elemento `<input>` con el tipo `checkbox` se utiliza para opciones que el usuario puede seleccionar o deseleccionar.

```html
<label for="subscribe">
  <input type="checkbox" id="subscribe" name="subscribe" />
  Suscribirse al boletín
</label>
```

<label for="subscribe">
  <input type="checkbox" id="subscribe" name="subscribe" />
  Suscribirse al boletín
</label>

### Botón de radio (Radio button)

El elemento `<input>` con el tipo radio permite seleccionar una opción entre varias posibles.

```html
<label> <input type="radio" name="gender" value="male" /> Masculino </label>
<label> <input type="radio" name="gender" value="female" /> Femenino </label>
```

<label>
    <input type="radio" name="gender" value="male"> 
    Masculino
</label>
<label>
    <input type="radio" name="gender" value="female"> 
    Femenino
</label>

## Validación de formularios

HTML5 introduce una serie de atributos que permiten validar datos en el lado del cliente antes de enviar el formulario. Algunos de los atributos más utilizados son:

- `required`: Indica que el campo es obligatorio.

```html
<input type="email" id="email" name="email" required />
```

- `minlength` y `maxlength`: Especifican la longitud mínima y máxima del texto ingresado.

```html
<input type="text" id="username" name="username" minlength="5" maxlength="15" />
```

- `pattern`: Define una expresión regular que el valor del campo debe cumplir.

```html
<input type="text" id="postalcode" name="postalcode" pattern="[0-9]{5}" />
```
