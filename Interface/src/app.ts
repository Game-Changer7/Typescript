//TODO: Interface

//? What is Interface
// An interface in TypeScript defines a structure for an object or a class. It specifies the types and shapes that objects should follow, ensuring type safety and making code easier to read and maintain.

//? Declaring an Interface
interface Person {
  name: string;
  age: number;
  greet(): void;
}

//? Using an Interface
const person: Person = {
  name: "John Doe",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.greet(); // Output: Hello, my name is John Doe.

//? Optional Properties
interface Car {
  make: string;
  model: string;
  year?: number; // Optional
}

const car1: Car = { make: "Toyota", model: "Corolla" }; // Valid without year
const car2: Car = { make: "Honda", model: "Civic", year: 2022 }; // Also valid
console.log(car1);
console.log(car2);

//? Readonly Properties
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 15;  // Error: Cannot assign to 'x' because it is a read-only property

//? Extending Interface
interface Animal {
  name: string;
  makeSound(): void;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Labrador",
  makeSound() {
    console.log("Woof!");
  },
};

myDog.makeSound(); // Output: Woof!

//? Interface with Function Types
interface Add {
  (a: number, b: number): number;
}

const addNumbers: Add = (a, b) => a + b;

console.log(addNumbers(5, 10)); // Output: 15

//? Index Signatures
interface StringDictionary {
  [key: string]: string;
}

const dictionary: StringDictionary = {
  hello: "world",
  foo: "bar",
};

console.log(dictionary.hello); // Output: world

//? Real-world E-commerce Product
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional property
}

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 1200,
};

console.log(`Product: ${product.name}, Price: $${product.price}`); // Output: Product: Laptop, Price: $1200

//? Interface Method
interface Person1 {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person1) {
  console.log(`Hello, ${person.firstName} ${person.lastName}!`);
  person.sayHello();
}

const person1: Person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sayHello() {
    console.log(`Hi There`);
  },
};

greet(person1);

//? Interface Inheritance
interface Animal1 {
  name: string;
  makeSound(): void;
}

interface Dog1 extends Animal1 {
  breed: string;
}

const myDog1: Dog1 = {
  name: "Buddy",
  breed: "Labrador",
  makeSound() {
    console.log("Woof!");
  },
};

myDog1.makeSound();


