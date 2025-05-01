"use strict";
const user = {
    name: "John",
    age: 30
};
console.log(user);
const person = {
    name: "John",
    age: 30
};
console.log(person);
const myCar = {
    brand: "Toyota",
    model: "Corolla"
};
console.log(myCar);
const p1 = { name: "Anushka" };
const p2 = { name: "Anushka", age: 25 };
const myDog = {
    name: "Buddy",
    breed: "Labrador",
    makeSound() {
        console.log("Woof!");
    }
};
console.log(myDog);
const point = {
    x: 10,
    y: 20,
    color: "red"
};
console.log(point);
const obj = {
    propA: "A",
    propB: 10,
    propC: true
};
console.log(obj);
const ob = {
    propA: "A",
    propB: 10,
    propC: true
};
console.log(ob);
class ConsoleLogger {
    log(message) {
        console.log("Log:", message);
    }
    error(message) {
        console.error("Error:", message);
    }
}
const logger = new ConsoleLogger();
console.log(logger);
