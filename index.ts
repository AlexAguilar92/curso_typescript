import sum, {d} from './sum';

const a: number = 1;
const b: number = 2;
const array1 = [1, 2]
const array2 = [3, 4]
const array3 = [...array1, ...array2]

const result: number = sum(a, b);
console.log("result", result);

type A = {
  a: number | null,
  b: number
};

type B = {
  c: string
};

const abc: A & B = {a: 1, b: 2, c: "c"} as IB;

console.log("abc", abc);

interface IA {
  a: number,
  b: number
}

interface IB extends IA {
  c: string
};

const iabc: IB = {a: 1, b: 2, c: "a"};

console.log("iabc", iabc);

enum E {
  A = sum(1, 2),
  B = 1
}

function changeName(data: string) {
	return function <T extends { new(...args: any[]): {} }>(constructor: T) {
		return class extends constructor {
			name = data;
		}
	}
}

@changeName('Bob')
class Person {
	name: string;
	constructor(name: string) {
		this.name = name;
	}

	sayHi() {
		console.log(`${this.name} says hi!`)
	}
}

new Person('John').sayHi();

function classDecorator(target:Function) {
  console.log(target);
}

@classDecorator
class MyClass {
  constructor() { 
      console.log('My class')
  }
}

function log(target: Object, propertyKey: string, descriptor: any) {
	console.log('Clase: ', target.constructor.prototype);
	console.log('Método: ', propertyKey);
	console.log('Property Descriptor: ', descriptor);

	descriptor.value = function (...args: any[]) {
		console.log('Argumentos de la funcion', args);
    }
    return descriptor;
}

class ExampleClass {
	@log
	outputSomething(something: string) {
		console.log(something);
	}
}

new ExampleClass().outputSomething('Parametro de prueba');

function decoratedProperty(target: Object, propertyKey: string) {
  console.log('Clase', target);
  console.log('Nombre de la propiedad', propertyKey);
}

function decoratedParam(target: Object, propertyKey: string, parameterIndex: number) {
  console.log('Nombre del metodo', propertyKey);
  console.log('Clase', target);
  console.log('Posicion del parámetro', parameterIndex);
}

class ExampleClass2 {
  @decoratedProperty exampleProperty: string = 'Hello World';

  sum(a: number, @decoratedParam b:number): number {
      return a+b
  }
}