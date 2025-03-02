"use strict";
let tech = "TypeScript";
tech = 12;
console.log(tech);
let user = { name: "John", age: 30 };
user = { name: "Jane", age: 25 };
console.log(user);
let numbers = [1, 2, 3];
numbers = [4, 5, 6];
console.log(numbers);
let coordinate = [40.7128, -74.006];
coordinate = [37.7749, -122.4194];
console.log(coordinate);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor);
let data = 10;
data = "Hello";
console.log(data);
let value = 10;
value = "Hello";
console.log(value);
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("John Doe");
function calculateCartTotal(cart, discount = 0) {
    console.log(discount);
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return total - total * discount;
}
const cart = [
    { name: "Phone", price: 699 },
    { name: "Charger", price: 29 },
    { name: "Headphones", price: 199 },
];
const total = calculateCartTotal(cart, 0.1);
console.log(`Total cost: $${total}`);
