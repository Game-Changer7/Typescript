"use strict";
var _a;
let score;
let score1 = 85;
score1 = "85";
console.log(score1);
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return `${a}${b}`;
    }
}
console.log(add(1, '2'));
let numbers = [1, 2, "3", 4];
console.log(numbers);
let user = { name: "John", age: 30 };
console.log(user);
let user1 = { name: "John", age: 30 };
console.log(user1);
function makeSound(pet) {
    if ("meow" in pet) {
        pet.meow();
    }
    else if ("bark" in pet) {
        pet.bark();
    }
}
const cat = { name: "Mittens", meow: () => console.log("Meow!") };
const dog = { name: "Fido", bark: () => console.log("Bark!") };
makeSound(cat);
makeSound(dog);
let a = "Hello";
let b = 42;
let c = 42;
console.log(a);
console.log(b);
console.log(c);
let size = "medium";
console.log(size);
let name1 = "John Doe";
name1 = null;
console.log(name1);
let product = { name: "Laptop", price: 999 };
console.log(product);
let user2 = { name: "John" };
console.log(user2);
let employee = { name: "John", role: "admin" };
console.log(employee);
let user3 = { name: "John", age: 30, role: "admin" };
console.log(user3);
let user4 = { name: "John Doe", age: 30, address: { street: "123 Main St", city: "New York", country: "USA" } };
console.log((_a = user4.address) === null || _a === void 0 ? void 0 : _a.street);
