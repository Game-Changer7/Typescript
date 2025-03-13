//TODO: Primitives - string, number, boolean, null, undefined, symbol

//? string
let message: string = "Hello World";
console.log(message);
let fullName: string = "John Doe";
console.log(fullName);

//? number
let age: number = 30;
console.log(age);

//? boolean
let isLoggedIn: boolean = false;
console.log(isLoggedIn);

//? null
let myNull: null = null;
console.log(myNull);

//? undefined
let myUndefined: undefined = undefined;
console.log(myUndefined);

//? symbol
let mySymbol: symbol = Symbol("mySymbol");
console.log(mySymbol);

//TODO: Objects - object, array, function, class, tuple

//? object
let person: object = { name: "Alice", age: 25 };
console.log(person);
// real-world scenario
let user: { name: string; age: number } = {
  name: "John",
  age: 30,
};
console.log(user);

//? array
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
console.log(numbers);
console.log(names);
// real-world scenario
let cartItems: { name: string; price: number }[] = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 25 },
];

//? function
let greet: (name: string) => void = (name: string) => {
  console.log(`Hello, ${name}!`);
};
console.log(greet);
let add: (a: number, b: number) => number = (a, b) => a + b;
console.log(add(1, 2));
// real-world scenario
const calculateTotal: (price: number, quantity: number) => number = (
  price,
  quantity
) => {
  return price * quantity;
};
console.log(calculateTotal(100, 2));

//? class
class Person {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public sayHello(): void {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const person1: Person = new Person("Alice", 25);
person1.sayHello();
// real-world scenario
class Product {
  private name: string;
  private price: number;
  private quantity: number;
  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  public calculateTotal(): number {
    return this.price * this.quantity;
  }
}

const product1: Product = new Product("Laptop", 999, 1);
console.log(product1.calculateTotal());

//? tuple
let id: string | number = 1;
let user1: [string, number] = ["John", 30];
console.log(id);
console.log(user1);
// real-world scenario
let coordinate: [number, number] = [40.7128, -74.006]; // Latitude, Longitude
console.log(coordinate[0]);
console.log(coordinate[1]);

//TODO: Special types - any, unknown, never

//? any
let data: any = 10;
let data1: any = "Hello";
data = 42; // No error
console.log(data);

//? unknown
let input: unknown = "Hello";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}

//? never
function error(message: string): never {
  throw new Error(message);
}
// real-world scenario
function handleStatus(status: "success" | "error"): void {
  switch (status) {
    case "success":
      console.log("Operation succeeded.");
      break;
    case "error":
      console.log("Operation failed.");
      break;
    default:
      const _exhaustiveCheck: never = status;
      throw new Error(`Unhandled case: ${status}`);
  }
}

//! Another Example
// Product type
type ProductExample = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  tags?: string[]; // Optional property
};

// Sample products
const products: ProductExample[] = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
    inStock: true,
    tags: ["electronics", "office"],
  },
  { id: 2, name: "Chair", price: 50, inStock: false },
];

// Function to calculate total price of all products in stock
const calculateTotalInStock = (items: ProductExample[]): number => {
  return items
    .filter((item) => item.inStock)
    .reduce((total, item) => total + item.price, 0);
};

const total = calculateTotalInStock(products);
console.log(`Total Price of Products in Stock: $${total}`);


// number: for numeric values.
// string: for text values.
// boolean: for true/false values.
// null: for an empty or uninitialized value.
// undefined: for a variable that hasn’t been assigned a value yet.
// any: for a value that can be of any type (use sparingly).
// unknown: a safer alternative to any, requiring type checks before use.
// void: for functions that don’t return a value.
// never: for values that never occur (like functions that always throw errors).
// object: for any non-primitive value.