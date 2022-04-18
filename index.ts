import sum from './sum';

const a: number = 1;
const b: number = 2;

const result: number = sum(a, b);
console.log("result", result);

type A = {
  a: number,
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

const iabc: IB = {a: 1, b: 2, c: "c"};

console.log("iabc", iabc);

enum E {
  A = sum(1, 2),
  B = sum(3, 4),
}