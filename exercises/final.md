# Ejercicio: Consulta de Pokémon

En este ejercicio, vas a implementar una funcionalidad para consultar la información de un Pokémon usando la [PokeAPI](https://pokeapi.co/). A continuación, se proporciona un archivo HTML básico y un script de JavaScript que debes completar y adaptar para que funcione correctamente.

## Instrucciones

1. **Descarga el archivo HTML proporcionado y ábrelo en tu editor de código.**

2. **Analiza el archivo HTML y el código JavaScript:**

   - El archivo HTML contiene un formulario para ingresar el nombre o el ID de un Pokémon y un área para mostrar la información del Pokémon.
   - El código JavaScript hace una solicitud a la PokeAPI cuando el formulario es enviado y muestra la información del Pokémon en la página.

3. **Completa la funcionalidad en el script JavaScript:**

   - El script debe manejar el evento de envío del formulario (`submit`) para realizar una solicitud a la API.
   - Debe utilizar el siguiente endpoint para realizar la solicitud a la PokeAPI:
     ```
     https://pokeapi.co/api/v2/pokemon/${pokemonInput}
     ```
   - Debe mostrar la información del Pokémon, incluyendo:
     - **Nombre del Pokémon**
     - **Imagen del Pokémon**
     - **Tipos del Pokémon**
     - **Habilidades del Pokémon**
     - **Estadísticas del Pokémon**

4. **Agrega manejo de errores:**
   - Si el Pokémon no se encuentra o hay algún error en la solicitud, debe mostrar un mensaje de error en el área de información del Pokémon.

## Código Proporcionado

Aquí tienes el archivo HTML inicial:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Consulta de Pokémon</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
      }
      #pokemon-form {
        margin-bottom: 20px;
      }
      #pokemon-info {
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <h1>Consulta de Pokémon</h1>
    <form id="pokemon-form">
      <input
        type="text"
        id="pokemon-input"
        placeholder="Ingresa nombre o ID del Pokémon"
        required
      />
      <button type="submit">Buscar</button>
    </form>
    <div id="pokemon-info"></div>
  </body>
</html>
