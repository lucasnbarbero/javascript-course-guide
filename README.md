# Guía Interactiva de JavaScript

Esta es una guía interactiva creada para un curso de JavaScript. Utiliza VitePress para generar una documentación fácil de navegar y de alta calidad.

## Descripción

El propósito de esta guía es proporcionar un recurso completo y práctico para los estudiantes del curso de JavaScript. Incluye conceptos teóricos, ejemplos de código y ejercicios prácticos para reforzar el aprendizaje.

## Características

- Documentación generada con VitePress
- Ejemplos de código interactivos
- Ejercicios prácticos al final de cada sección
- Diseño responsivo y fácil de navegar

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/guia-interactiva-js.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd guia-interactiva-js
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso

### Desarrollo

Para iniciar un servidor de desarrollo y ver los cambios en tiempo real:

```bash
npm run docs:dev
```

### Construcción

Para construir la versión estática de la documentación:

```bash
npm run docs:build
```

### Vista previa

Para previsualizar la versión construida:

```bash
npm run docs:preview
```

## Estructura del Proyecto

```plaintext
guia-interactiva-js/
├── .eslintrc.json
├── .prettierrc
├── README.md
├── package.json
├── node_modules/
├── docs/
│   ├── .vitepress/
│   │   ├── config.js
│   ├── index.md
│   ├── guia/
│       ├── introduccion.md
│       ├── fundamentos.md
│       ├── avanzados.md
└── styles/
    ├── index.css
```

- **`docs/.vitepress/config.js`**: Configuración de VitePress.
- **`docs/index.md`**: Página principal de la guía.
- **`docs/guia`**: Directorio con los diferentes capítulos de la guía.
- **`styles/index.css`**: Estilos personalizados.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o una pull request si tienes alguna sugerencia o mejora.

## Licencia

Este proyecto está bajo la licencia MIT.

---

**Autor:** Lucas

**Contacto:** [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)
