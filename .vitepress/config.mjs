import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Curso de JavaScript",
  description: "Guía interactiva para el curso de JavaScript",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Inicio", link: "/" }],

    sidebar: [
      { text: "Introducción", link: "/guide/introduction" },
      { text: "Variables y Constantes", link: "/guide/variables" },
      { text: "Tipos de Datos", link: "/guide/tipo-datos" },
      { text: "Operadores y Funciones Matemáticas", link: "/guide/operadores" },
      {
        text: "Estructuras de Control de Flujo",
        link: "/guide/estructuras-control",
      },
      { text: "Arrays en JavaScript", link: "/guide/arrays" },
      { text: "Manejo de Cadenas de Texto", link: "/guide/cadenas" },
      { text: "Trabajando con Fechas y Horas", link: "/guide/fechas" },
      { text: "Programación Orientada a Objetos", link: "/guide/poo" },
      { text: "Eventos", link: "/guide/eventos" },
      { text: "Objetos del Navegador", link: "/guide/navegador" },
      { text: "Formularios y Controles HTML", link: "/guide/formularios" },
      { text: "Cookies y Almacenamiento", link: "/guide/cookies" },
      { text: "Expresiones Regulares", link: "/guide/expresiones" },
      { text: "Introducción a AJAX", link: "/guide/ajax" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
