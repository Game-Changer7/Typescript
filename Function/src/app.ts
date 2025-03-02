//TODO: Function

//? 1. Basic Function
// a: number and b: number: Specifies that the parameters must be of type number.
// : number: Specifies the return type of the function.
// return a + b;: Returns the sum of a and b.
function add(a: number, b: number): number {
  return a + b;
}
let sum = add(1, 2);
console.log(sum); // Output: 3

//? 2. Function with Optional Parameters
// age?: number: The ? makes the parameter optional.
// If age is not provided, the function still works.
function greet(name: string, age?: number): string {
  return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}.`;
}
let message = greet("John Doe");
console.log(message); // Output: Hello, John Doe.

//? 3. Function with Default Parameters
// b: number = 1: Sets the default value of b to 1 if not provided.
// Calling multiply(5) returns 5 because b defaults to 1.
function multiply(a: number, b: number = 1): number {
  return a * b;
}
let result = multiply(5);
console.log(result); // Output: 5

//? 4. Arrow Function
let great: (name: string) => void = (name: string) => {
  console.log(`Hello, ${name}.`);
};
let message1 = great("John Doe");
console.log(message1); // Output: Undefined

//? 5. Function with Rest Parameters
// ...numbers: number[]: Accepts multiple arguments as an array.
// This function calculates the sum of all numbers passed.
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
let result1 = sumAll(1, 2, 3, 4, 5);
console.log(result1); // Output: 15

//? 6. Function Types
type GreetFunction = (name: string) => void;
let grt: GreetFunction = (name: string) => {
  console.log(`Hello, ${name}.`);
};
let message2 = grt("John Doe");
console.log(message2); // Output: Undefined

//? 7. Overloading
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: any, b: any): any {
  return a + b;
}
let result2 = add1(1, 2);
console.log(result2); // Output: 3

//? 8. Higher-Order Functions
function applyOperation(
  a: number,
  b: number,
  operation: (a: number, b: number) => number
): number {
  return operation(a, b);
}
let result3 = applyOperation(1, 2, (a, b) => a + b);
console.log(result3); // Output: 3

//? 9. Callback Functions
function greet1(callback: (name: string) => void) {
  callback("John Doe");
}
greet1((name) => {
  console.log(`Hello, ${name}.`);
});
//? 10. Recursive Functions
function factorial1(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial1(n - 1);
}
let result4 = factorial1(5);
console.log(result4); // Output: 120

//? 12. Lambda Functions
let add2 = (a: number, b: number): number => a + b;
let result5 = add2(1, 2);
console.log(result5); // Output: 3

//? 14. Closures
function createCounter(): () => number {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
}
let counter = createCounter();
console.log(counter()); // Output: 1

//? 15. Function Composition
function compose1(
  f: (a: number) => number,
  g: (a: number) => number
): (a: number) => number {
  return (a: number) => f(g(a));
}
let result6 = compose1(
  (a: number) => a + 1,
  (a: number) => a * 2
);
console.log(result6(3)); // Output: 7

//? 16. Partial Application
function add3(a: number, b: number): number {
  return a + b;
}
let result7 = add3(1, 2);
console.log(result7); // Output: 3

//? 17. Currying
function curriedAdd(a: number): (b: number) => number {
  return (b: number) => a + b;
}
let add4 = curriedAdd(1);
console.log(add4(2)); // Output: 3
