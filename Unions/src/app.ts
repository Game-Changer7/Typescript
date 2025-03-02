//TODO: Unions
//? What is a Union Type?
// In TypeScript, a union type allows a variable to be one of multiple specified types. You define union types using the | (pipe) symbol. This feature is particularly useful for creating more flexible and dynamic type definitions, as it enables you to specify multiple acceptable types for a variable or function parameter.

//? Syntax of Union Types
let score: number | string;

//? Basic example
let score1: number | string = 85;
score1 = "85";
console.log(score1);

//? Union Types in Functions Parameters
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return `${a}${b}`;
  }
}
console.log(add(1, '2')); // Output: 3

//? Union Types in Arrays
let numbers: (number | string)[] = [1, 2, "3", 4];
console.log(numbers);

//? Union Types in Objects
let user: { name: string; age: number | string } = { name: "John", age: 30 };
console.log(user);

//? Union Types with Custom Types (Interfaces/Type Aliases)
interface User {
  name: string;
  age: number | string;
}
let user1: User = { name: "John", age: 30 };
console.log(user1);

//? Union Types with Type Aliases
type Cat = {
  name: string;
  meow: () => void;
};

type Dog = {
  name: string;
  bark: () => void;
};

type Pet = Cat | Dog;

function makeSound(pet: Pet) {
  if ("meow" in pet) {
    pet.meow();
  } else if ("bark" in pet) {
    pet.bark();
  }
}

const cat: Cat = { name: "Mittens", meow: () => console.log("Meow!") };
const dog: Dog = { name: "Fido", bark: () => console.log("Bark!") };

makeSound(cat); // Output: Meow!
makeSound(dog); // Output: Bark!

//? Union Types with Conditional Types
type A = string | number;
type B = A extends string ? string : number; // Equivalent to string | number
type C = A extends number ? string : number; // Equivalent to string | number

let a: A = "Hello";
let b: B = 42; // Valid because B is string | number
let c: C = 42; // Valid because C is string | number

console.log(a);
console.log(b);
console.log(c);

//? Union Types with Literal Types
type Size = "small" | "medium" | "large";
let size: Size = "medium";
console.log(size);

//? Union Types with Nullable Types
type Name = string | null;
let name1: Name = "John Doe";
name1 = null;
console.log(name1);

//? Union Types with Optional Properties
interface Product {
  name: string;
  price: number;
  description?: string;
}

let product: Product = { name: "Laptop", price: 999 };
console.log(product);

//? Union Types with Default Values
let user2: { name: string; age?: number } = { name: "John" };
console.log(user2);

//? Union Types with Conditional Types
type Employee =
  | { name: string; role: "admin" }
  | { name: string; role: "user" };
let employee: Employee = { name: "John", role: "admin" };
console.log(employee);

//? Union Types with Type Aliases
type User1 = { name: string; age: number };
type Admin = { role: string };
let user3: User1 & Admin = { name: "John", age: 30, role: "admin" };
console.log(user3);

//? Union Types with Optional Chaining
interface User2 {
  name: string;
  age: number;
  address?: {
    street: string;
    city: string;
    country: string;
  };
}
let user4: User2 = { name: "John Doe", age: 30, address: { street: "123 Main St", city: "New York", country: "USA" } };
console.log(user4.address?.street);



