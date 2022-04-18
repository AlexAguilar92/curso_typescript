<div id="top"></div>

<br />
<div align="center">
  <h3 align="center">Typescript</h3>

  <p align="center">
    Curso typescript
    <br />
  </p>
</div>

<details>
  <summary>Tabla de contenido</summary>
  <ol>
    <li><a href="#introduccion">Introducción</a></li>
    <li><a href="#tipado">Tipado estático</a></li>
    <li><a href="#fallos">Fallos sin excepción</a></li>
    <li><a href="#primitivos">Tipos primitivos</a></li>
    <li><a href="#no-primitivos">No primitivos</a></li>
    <li><a href="#funciones">Funciones</a></li>
    <li><a href="#union">Unión de tipos</a></li>
    <li><a href="#alias_tipos">Alias de tipos</a></li>
    <li><a href="#interfaces">Interfaces</a></li>
    <li><a href="#narrowing">Narrowing</a></li>
    <li><a href="#enum">Enumerables</a></li>
    <li><a href="#asercion">Aserción de tipos</a></li>
    <li><a href="#genericos">Genéricos</a></li>
    <li><a href="#clases">Clases</a></li>
    <li><a href="#bibliografia">Bibliografía</a></li>
  </ol>
</details>

<br />
<br />

<div id="introduccion"></div>

## Introducción
TypeScript va un paso más allá de ECMAScript 6 o posterior y añade más funcionalidad a ECMAScript, como tipado fuerte, anotaciones o módulos.

Como TypeScript es un superconjunto de JavaScript, todo el código escrito en JS es válido para TS. Pero no lo contrario. Esto lo podemos comprobar gracias a los navegadores web. Ya que no entienden el código escrito en TypeScript y, para que lo hagan, es necesario hacer una ‘’transpilación’’ del código a JavaScript.

La transpilación es aplicable hacia cualquier versión de ECMAScript, tanto para navegadores antiguos como para navegadores más actuales.

<p align="right">(<a href="#top">inicio</a>)</p>

<div id="tipado"></div>

## Tipado estático
Typescript tiene comprobación de tipado estático lo cual permite detectar errores de asignación en tiempo de desarrollo. JavaScript es un lenguaje de programación que usa un tipado dinámico, luego la comprobación de tipificación se realiza durante su ejecución en vez de durante la compilación.

<p align="right">(<a href="#top">inicio</a>)</p>

<div id="fallos"></div>

## Fallos-sin-excepcion
Hay fallos además de los que se pueden generar por lógica y por la implementación de ES que estemos usando que no disparan excepciones, tales como:

```javascript
const user = {
  name: "Alex",
  age: 30,
};
user.location; // returns undefined
```
lo cual para JS no es un error, pero que TS nos macará como error, ya que la propiedad no existe y el tipado es escricto.

<p align="right">(<a href="#top">inicio</a>)</p>

<div id="primitivos"></div>

## Tipos primitivos
TS tiene un conjunto de tipos de los cuales 3 se consideran primitivos string, number, boolean.

- string que acepta valores tales como: "Anita lava la tina. 3".
- number que acepta valores como: 1, 2.1, -4, ya que JS no tiene un tipo específico para los enteros en tiempo de ejecución.
- boolean que acepta true o false.

<p align="right">(<a href="#top">inicio</a>)</p>

<div id="no-primitivos"></div>

## No primitivos
- Matrices(Array) son arreglos de datos semánticamente similares. Sintaxis: number[] o Array&lt;number>.
- any es un tipo especial que puede representar cualquier tipo, desde un primitivo hasta ser llamado como una función. No se recomienda su uso en producción ya que desabilita el chequeo de tipos.
```javascript
let obj: any = { x: 0 };
// Ninguna de las siguientes líneas causará un error en el compilador.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
```
- null representa una variable vacía pero debe ser declarado para ser soportado strict null checks.
- unknown es otro tipo especial de TS que tiene un comportamiento similar a any, tampoco se recomienda su uso.
- void, este tipo de dato se usa cuando no se quiere retornar nada de una funcióny solo se le puede asignar null o undefined.
- object, este tipo es uno muy común en JS los cuales también se conocen como JSON.
```typescript
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());
Object is possibly 'undefined'.
Object is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
 
  // Una alternativa moderna usando sintaxis JavaScript:
  console.log(obj.last?.toUpperCase());
}


function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

Todas las variables son any hasta que se declare un tipo ya que deja que se infiera el tipo de dato.

<p align="right">(<a href="#top">inicio</a>)</p>

<div id="funciones"></div>

## Funciones
Estas son el principal medio para transporte de datos en JS recordando que este lenguage soporta el paradigma funcional, por tanto trata a las funciones como ciudadanos de primera clase.

Ejemplo:
```typescript
//Anotación de parametros y de devolución
function saludar(nombre: string): void {
  console.log("Hola, " + nombre.toUpperCase() + "!!");
}

//Parámetros opcionales
function imprimirNombre(obj: { first: string; last?: string }) {
  // ...
}

printName({ first: "Alex" });
printName({ first: "Isaac", last: "Aguilar" });

// No type annotations here, but TypeScript can spot the bug
const nombres = ["Alex", "Isaac"];

// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUppercase());
Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUppercase());
Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
```
<p align="right">(<a href="#top">inicio</a>)</p>

<div id="union"></div>

## Unión de tipos
El sistema de tipos de Typescript te permite crear nuevos tipos a partir de los ya existentes una manera de crear nuevos tipos es a través de la unión de estos:

```typescript
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

  const n: number | null = null;
  //Object is possibly null
  console.log(n.toString());
```

<p align="right">(<a href="#top">inicio</a>)</p>

<div id="alias_tipos"></div>

## Alias de tipos
Este se refiere a ponerle un nombre (alias) a cualquier tipo, ejemplo:
```typescript
type Point = {
  x: number;
  y: number;
};
 

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```

<p align="right">(<a href="#top">inicio</a>)</p>

<div id="interfaces"></div>

## Interfaces
Son otra manera de generar tipos, se usa de manera muy similar a los alias de tipos:

```typescript
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```
La principal diferencia entre los alias y las interfaces es que los tipos ya no están abiertos a cambios y las interfaces siempre se pueden extender.

## Bibliografia
- [TypeScriptLang](https://www.typescriptlang.org/docs/handbook)
- [Profile](https://profile.es/blog/que-es-typescript-vs-javascript/)
- [DigitalOcean](https://www.digitalocean.com/community/tutorials/typescript-new-project)