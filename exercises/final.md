# 🕵️‍♂️ Ejercicio: Consulta y Listado de Pokémon

En este ejercicio, implementarás una página web que permite a los usuarios buscar información sobre un Pokémon específico y también visualizar una lista de Pokémon paginada. Utilizarás la [PokeAPI](https://pokeapi.co/) para obtener los datos necesarios.

## 📋 Instrucciones

1. **Descarga el archivo HTML y CSS proporcionado, así como el código JavaScript.**

2. **Implementa la funcionalidad de búsqueda:**

   - Utiliza el endpoint `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`.
   - Cuando un usuario ingrese el nombre o ID de un Pokémon en el formulario y presione "Buscar", realiza una solicitud a este endpoint para obtener la información del Pokémon.
   - Muestra la información del Pokémon en el área designada, que incluye:
     - Nombre del Pokémon
     - Imagen del Pokémon
     - Tipos del Pokémon
     - Habilidades del Pokémon
     - Estadísticas del Pokémon

3. **Implementa la funcionalidad de listado paginado:**

   - Utiliza el endpoint `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`.
   - Carga una lista de Pokémon con un límite de 10 Pokémon por página.
   - Muestra cada Pokémon en una lista con su imagen y nombre.
   - Implementa los botones de "Anterior" y "Siguiente" para navegar entre las páginas de la lista de Pokémon.

4. **Manejo de errores:**
   - Asegúrate de manejar errores de red y errores específicos de la API, como Pokémon no encontrados.
   - Muestra mensajes de error claros en el área de información del Pokémon y en la lista si ocurre algún problema.

## 🌐 Endpoints de la API

### 1. Obtener Información de un Pokémon

- **URL:** `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`
- **Método:** `GET`
- **Descripción:** Obtiene la información detallada de un Pokémon específico basado en su nombre o ID.
- **Respuesta:** Un objeto JSON que contiene el nombre, imagen, tipos, habilidades y estadísticas del Pokémon.

### 2. Obtener una Lista de Pokémon

- **URL:** `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de Pokémon con paginación.
- **Parámetros:**
  - `limit`: Número de Pokémon a devolver por página (ej. 10).
  - `offset`: Número de Pokémon a omitir para la página actual (ej. 0, 10, 20, etc.).
- **Respuesta:** Un objeto JSON que contiene una lista de Pokémon, donde cada Pokémon tiene un nombre y una URL para obtener más detalles.

## 📁 Archivos Proporcionados

### `index.html`

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Consulta de Pokémon</title>
    <link rel="stylesheet" href="styles.css" />
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

    <ul id="pokemon-list"></ul>
    <div id="pagination">
      <button id="prev" disabled>Anterior</button>
      <button id="next">Siguiente</button>
    </div>

    <script src="app.js"></script>
  </body>
</html>
```

### `styles.css`

```css
body {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f9;
}

h1 {
  color: #333;
}

#pokemon-form {
  margin-bottom: 20px;
}

#pokemon-info {
  margin-top: 20px;
}

#pokemon-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-width: 600px;
  width: 100%;
}

#pokemon-list li {
  margin: 10px 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

#pokemon-list img {
  width: 60px;
  height: 60px;
  margin-right: 15px;
}

#pagination {
  margin-top: 20px;
}

#pagination button {
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
}

#pagination button:disabled {
  background-color: #c0c0c0;
  cursor: not-allowed;
}

#pagination button:not(:disabled):hover {
  background-color: #0056b3;
}
```

¡Buena suerte con el ejercicio! Si tienes alguna duda, no dudes en preguntar. 😊
