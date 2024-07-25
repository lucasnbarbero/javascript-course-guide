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
            text: 'Funciones',
            items: [
              { text: 'Declaración y ejecución', link: '/guide/basics/functions/basics' },
              { text: 'Expresiones de función', link: '/guide/basics/functions/expression' },
              { text: 'Arrow functions', link: '/guide/basics/functions/arrows' },
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
        text: 'POO (Programación orientada a objetos)',
        items: [
          { text: 'Introducción', link: '/guide/poo/intro' },
          { text: 'Clases', link: '/guide/poo/class' },
          { text: 'Propiedades de clases', link: '/guide/poo/class-properties' },
          { text: 'Métodos de clases', link: '/guide/poo/class-methods' },
          { text: 'Herencia', link: '/guide/poo/inheritance' },
        ],
      },
      {
        text: 'Manejo de datos',
        items: [
          { text: 'Strings', link: '/guide/data/strings' },
          { text: 'Fecha y hora', link: '/guide/data/date' },
          { text: 'Expresiones regulares', link: '/guide/data/regular-expressions' },
        ],
      },
      {
        text: 'Web',
        items: [
          { text: 'Introducción', link: '/guide/dom/intro' },
          { text: 'Eventos del DOM', link: '/guide/dom/events' },
          { text: 'Objetos del navegador', link: '/guide/dom/browser-objects' },
          { text: 'Formularios', link: '/guide/dom/forms' },
          { text: 'Cookies', link: '/guide/dom/cookies' },
          { text: 'AJAX', link: '/guide/dom/ajax' },
        ],
      },
      {
        text: 'Ejercicios',
        items: [
          { text: 'Condicionales', link: '/exercises/ifelse' },
          { text: 'Bucles', link: '/exercises/loops' },
          { text: 'Funciones', link: '/exercises/functions' },
          { text: 'Arrays', link: '/exercises/arrays' },
          { text: 'Objetos', link: '/exercises/objects' },
          { text: 'Integrador 1', link: '/exercises/integrator-1' },
          { text: 'Final', link: '/exercises/final' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lucasnbarbero/javascript-course-guide' },
    ],

    footer: {
      message: 'Hecho por Lucas Barbero',
    },
  },
});
