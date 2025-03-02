"use strict";
//TODO: Primitives - string, number, boolean, null, undefined, symbol
//? string
let message = "Hello World";
console.log(message);
let fullName = "John Doe";
console.log(fullName);
//? number
let age = 30;
console.log(age);
//? boolean
let isLoggedIn = false;
console.log(isLoggedIn);
//? null
let myNull = null;
console.log(myNull);
//? undefined
let myUndefined = undefined;
console.log(myUndefined);
//? symbol
let mySymbol = Symbol("mySymbol");
console.log(mySymbol);
//TODO: Objects - object, array, function, class, tuple
//? object
let person = { name: "Alice", age: 25 };
console.log(person);
// real-world scenario
let user = {
    name: "John",
    age: 30,
};
console.log(user);
//? array
let numbers = [1, 2, 3];
let names = ["Alice", "Bob"];
console.log(numbers);
console.log(names);
// real-world scenario
let cartItems = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
];
//? function
let greet = (name) => {
    console.log(`Hello, ${name}!`);
};
console.log(greet);
let add = (a, b) => a + b;
console.log(add(1, 2));
// real-world scenario
const calculateTotal = (price, quantity) => {
    return price * quantity;
};
console.log(calculateTotal(100, 2));
//? class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}
const person1 = new Person("Alice", 25);
person1.sayHello();
// real-world scenario
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    calculateTotal() {
        return this.price * this.quantity;
    }
}
const product1 = new Product("Laptop", 999, 1);
console.log(product1.calculateTotal());
//? tuple
let id = 1;
let user1 = ["John", 30];
console.log(id);
console.log(user1);
// real-world scenario
let coordinate = [40.7128, -74.006]; // Latitude, Longitude
console.log(coordinate[0]);
console.log(coordinate[1]);
//TODO: Special types - any, unknown, never
//? any
let data = 10;
let data1 = "Hello";
data = 42; // No error
console.log(data);
//? unknown
let input = "Hello";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
//? never
function error(message) {
    throw new Error(message);
}
// real-world scenario
function handleStatus(status) {
    switch (status) {
        case "success":
            console.log("Operation succeeded.");
            break;
        case "error":
            console.log("Operation failed.");
            break;
        default:
            const _exhaustiveCheck = status;
            throw new Error(`Unhandled case: ${status}`);
    }
}
// Sample products
const products = [
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
const calculateTotalInStock = (items) => {
    return items
        .filter((item) => item.inStock)
        .reduce((total, item) => total + item.price, 0);
};
const total = calculateTotalInStock(products);
console.log(`Total Price of Products in Stock: $${total}`);
