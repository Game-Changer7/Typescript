//? What is Narrowing
// Narrowing is the process of narrowing down the type of a variable or expression to a more specific type. It allows TypeScript to perform type-checking and improve code readability.

let score: number | string = 85;
score = "85";
console.log(score);

//? Narrowing with Type Guards
function greet(name: string | null) {
    if (name) {
        console.log("Hello, " + name);
    } else {
        console.log("Hello, anonymous user");
    }
}

greet("John Doe");

//? Narrowing with Type Aliases

type User = {
    name: string;
    age: number;
};

let userName: User = { name: "John Doe", age: 30 };
let userAge: number = 34;

console.log(userName);
console.log(userAge);

//? Narrowing with Union Types

function add(a: number, b: number | string) {
    if (typeof b === "string") {
        b = parseInt(b);
    }
    return a + b;
}

console.log(add(1, '2'));

//? Using in Operator

type A = "Hello";
let greeting: A = "Hello";

if (greeting === "Hello") {
    console.log("Hello");
}

//? Using instanceof Operator
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

let animal: Animal = new Animal();
let dog: Dog = new Dog();

if (animal instanceof Animal) {
    animal.speak();
}

if (dog instanceof Dog) {
    dog.bark();
}
