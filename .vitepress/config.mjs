import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Curso de JavaScript',
  description: 'Guía interactiva para el curso de JavaScript',

  themeConfig: {
    logo: '/assets/javascript-logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Inicio', link: '/' }],

    sidebar: [
      {
        text: 'Introducción',
        items: [
          {
            text: '¿Qué es?',
            link: '/guide/intro',
          },
        ],
      },
      {
        text: 'Fundamentos',
        items: [
          { text: 'Variables', link: '/guide/basics/variables' },
          { text: 'Tipos de datos', link: '/guide/basics/types' },
          {
            text: 'Matematica',
            items: [
              { text: 'Operadores', link: '/guide/basics/maths/operators' },
              { text: 'Funciones', link: '/guide/basics/maths/functions' },
            ],
          },
          {
            text: 'Estructuras de control',
            items: [
              { text: 'Condicionales', link: '/guide/basics/ifelse' },
              { text: 'Bucles', link: '/guide/basics/whilefor' },
            ],
          },
          {
            text: 'Arrays',
            items: [
              { text: '¿Qué son?', link: '/guide/basics/arrays/intro' },
              { text: 'Métodos', link: '/guide/basics/arrays/methods' },
            ],
          },
          {
            text: 'Objetos',
            items: [
              { text: '¿Qué son?', link: '/guide/basics/objects/intro' },
              { text: 'Referencias y copias', link: '/guide/basics/objects/references' },
            ],
          },
        ],
      },
      {
        text: 'Manejo de datos y DOM',
        items: [
          { text: 'Strings', link: '/guide/data/strings' },
          { text: 'Fecha y hora', link: '/guide/data/date' },
        ],
      },
      // { text: 'Manejo de Cadenas de Texto', link: '/guide/cadenas' },
      // { text: 'Trabajando con Fechas y Horas', link: '/guide/fechas' },
      // { text: 'Programación Orientada a Objetos', link: '/guide/poo' },
      // { text: 'Eventos', link: '/guide/eventos' },
      // { text: 'Objetos del Navegador', link: '/guide/navegador' },
      // { text: 'Formularios y Controles HTML', link: '/guide/formularios' },
      // { text: 'Cookies y Almacenamiento', link: '/guide/cookies' },
      // { text: 'Expresiones Regulares', link: '/guide/expresiones' },
      // { text: 'Introducción a AJAX', link: '/guide/ajax' },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],

    footer: {
      message: 'Hecho por Lucas Barbero',
    },
  },
});
