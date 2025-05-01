"use strict";
let score = 85;
score = "85";
console.log(score);
function greet(name) {
    if (name) {
        console.log("Hello, " + name);
    }
    else {
        console.log("Hello, anonymous user");
    }
}
greet("John Doe");
let userName = { name: "John Doe", age: 30 };
let userAge = 34;
console.log(userName);
console.log(userAge);
function add(a, b) {
    if (typeof b === "string") {
        b = parseInt(b);
    }
    return a + b;
}
console.log(add(1, '2'));
let greeting = "Hello";
if (greeting === "Hello") {
    console.log("Hello");
}
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}
let animal = new Animal();
let dog = new Dog();
if (animal instanceof Animal) {
    animal.speak();
}
if (dog instanceof Dog) {
    dog.bark();
}
