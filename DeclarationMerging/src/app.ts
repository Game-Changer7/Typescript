//TODO: Declaration Merging

//? What is Declaration Merging?
//TODO: https://www.typescriptlang.org/docs/handbook/declaration-merging.html
// Declaration Merging is a feature in TypeScript that allows multiple declarations with the same name to be merged into a single definition. This is typically used with interfaces, functions, namespaces, and enums. Declaration merging is useful for extending existing types or adding new properties to libraries or built-in types.

//? How to Use Declaration Merging?

interface Person {
  name: string;
  age: number;
}

interface Person {
  email: string;
}

const person: Person = {
  name: "John Doe",
  age: 30,
  email: "XHtWb@example.com",
};

console.log(person.name); // Output: "John Doe"
console.log(person.age); // Output: 30
console.log(person.email); // Output: "XHtWb@example.com"

//? Summary
// Declaration merging allows you to extend or modify existing types by adding new properties or methods. It is useful for extending existing interfaces, classes, namespaces, or enums.

//? Example
// interface Car {
//   make: string;
//   model: string;
//   year: number;
// }

// interface Car {
//   color: string;
//   mileage: number;
// }

// const car: Car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2022,
//   color: "blue",
//   mileage: 50000,
// };
// console.log(car.make); // Output: "Toyota"
// console.log(car.model); // Output: "Camry"
// console.log(car.year); // Output: 2022
// console.log(car.color); // Output: "blue"
// console.log(car.mileage); // Output: 50000

//? Example 2
interface Car {
  brand: string;
  start(): void;
}
interface Car {
  model: string;
  stop(): void;
}
const car: Car = {
  brand: "Toyota",
  model: "Camry",
  start() {
    console.log("Starting the car...");
  },
  stop() {
    console.log("Stopping the car...");
  },
};

console.log(car.brand); // Output: "Toyota"
console.log(car.model); // Output: "Camry"
car.start(); // Output: "Starting the car..."
car.stop(); // Output: "Stopping the car..."
