# Expresiones regulares

Las **expresiones regulares** (a menudo llamadas RegExp o RegEx) son un sistema para buscar, capturar o reemplazar texto utilizando **patrones**. Estos patrones permiten realizar una búsqueda de texto de una forma relativamente sencilla y abstracta, de forma que abarca una gran cantidad de posibilidades que de otra forma sería imposible o muy extensa y compleja.

Estos **patrones** se representan mediante una cadena de texto, donde ciertos símbolos tienen un significado especial. Antes de explicar el significado de esos símbolos especiales, vamos a convertirlo en un ejercicio para verlo mejor.

Necesitamos **detectar si un nombre empieza con las letras «p» o «s» y además termina con las letras «o» o «a»**. Es decir, necesitamos comprobar si se cumplen dos restricciones con dos posibilidades cada una.

Esto podríamos hacerlo de varias formas, por ejemplo:

- Extraer la primera y última letra y detectar los nombres que coinciden.
- Escribir una expresión regular que detecte los nombres que coinciden.

Vamos a plantear esto con código:

```js
const names = ['Pedro', 'Sara', 'Miriam', 'Nestor', 'Adrián', 'Sandro'];

// Comprobación sin usar expresiones regulares
names.forEach(function (name) {
  const firstLetter = name.at(0).toLowerCase();
  const lastLetter = name.at(-1).toLowerCase();

  if ((firstLetter === 'p' || firstLetter === 's') && (lastLetter === 'o' || lastLetter === 'a')) {
    console.log(`El nombre ${name} cumple las restricciones.`);
  }
});

// Comprobación usando expresiones regulares
names.forEach(function (name) {
  const regex = /^(p|s).+(o|a)$/i;

  if (regex.test(name)) {
    console.log(`El nombre ${name} cumple las restricciones.`);
  }
});
```

## Cuando NO utilizarlas

Que un problema se pueda resolver con expresiones regulares en menos líneas, no implica que sea más sencillo, fácil de leer o eficiente. **Toda expresión regular conlleva una gran responsabilidad**. Las expresiones regulares pueden parecer ideales en muchos casos, pero es muy fácil crear expresiones regulares que dejen pasar casos que no son deseables. Esto requiere una cierta práctica y experiencia que hay que adquirir.

Por norma general, siempre se debería intentar resolver los problemas sin utilizar expresiones regulares, salvo en casos particulares donde el uso de la **expresión regular** nos proporcione una ventaja muy clara. Por ejemplo, situaciones donde hay que controlar tantos casos, que sin expresión regular el código sería exageradamente extenso.
