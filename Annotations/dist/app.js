"use strict";
var _a, _b, _c, _d, _e;
let message = "Hello World";
console.log(message);
let age = 21;
console.log(age);
let isLoggedIn = true;
console.log(isLoggedIn);
let myNull = null;
console.log(myNull);
let myUndefined = undefined;
console.log(myUndefined);
let mySymbol = Symbol("mySymbol");
console.log(mySymbol);
let person = { name: "John", age: 30 };
console.log(person);
let numbers = [1, 2, 3];
console.log(numbers);
let user = ["John", 30];
console.log(user);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor);
let data = 10;
let data1 = "Hello";
data = 42;
console.log(data);
let input = "Hello";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
let greet = (name) => {
    console.log(`Hello, ${name}!`);
};
greet("John Doe");
let message1 = "Hello World";
let message2 = message1;
console.log(message2);
let score = 85;
score = "85";
console.log(score);
let user1 = {
    name: "John",
    age: 30,
    role: "Admin",
};
console.log(user1);
let person1 = {
    name: "John",
    age: 30,
};
console.log(person1);
let size = "medium";
console.log(size);
let name1 = "John Doe";
name1 = null;
console.log(name);
let product = {
    name: "Laptop",
    price: 999,
    description: "A powerful laptop",
};
console.log(product);
let employee = {
    id: 1,
    name: "John Doe",
    age: 30,
};
console.log(employee);
function createProduct(name, price, description) {
    return {
        name,
        price,
        description,
    };
}
let product1 = createProduct("Laptop", 999);
console.log(product1);
let user2 = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
    },
};
console.log((_a = user2.address) === null || _a === void 0 ? void 0 : _a.street);
let name2 = "John Doe";
console.log(name2 !== null && name2 !== void 0 ? name2 : "Guest");
let user3 = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
    },
};
console.log((_c = (_b = user3.address) === null || _b === void 0 ? void 0 : _b.street) !== null && _c !== void 0 ? _c : "Unknown");
let user4 = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
    },
};
console.log((_e = (_d = user4.address) === null || _d === void 0 ? void 0 : _d.street) !== null && _e !== void 0 ? _e : "Unknown");
function createProduct2(name, price, description) {
    return {
        name,
        price,
        description,
    };
}
let product3 = createProduct2("Laptop", 999);
console.log(product3);
