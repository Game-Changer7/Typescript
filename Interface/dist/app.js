"use strict";
const person = {
    name: "John Doe",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    },
};
person.greet();
const car1 = { make: "Toyota", model: "Corolla" };
const car2 = { make: "Honda", model: "Civic", year: 2022 };
console.log(car1);
console.log(car2);
const point = { x: 10, y: 20 };
const myDog = {
    name: "Buddy",
    breed: "Labrador",
    makeSound() {
        console.log("Woof!");
    },
};
myDog.makeSound();
const addNumbers = (a, b) => a + b;
console.log(addNumbers(5, 10));
const dictionary = {
    hello: "world",
    foo: "bar",
};
console.log(dictionary.hello);
const product = {
    id: 1,
    name: "Laptop",
    price: 1200,
};
console.log(`Product: ${product.name}, Price: $${product.price}`);
function greet(person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
    person.sayHello();
}
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    sayHello() {
        console.log(`Hi There`);
    },
};
greet(person1);
const myDog1 = {
    name: "Buddy",
    breed: "Labrador",
    makeSound() {
        console.log("Woof!");
    },
};
myDog1.makeSound();
