"use strict";
const person = {
    name: "John Doe",
    age: 30,
    email: "XHtWb@example.com",
};
console.log(person.name);
console.log(person.age);
console.log(person.email);
const car = {
    brand: "Toyota",
    model: "Camry",
    start() {
        console.log("Starting the car...");
    },
    stop() {
        console.log("Stopping the car...");
    },
};
console.log(car.brand);
console.log(car.model);
car.start();
car.stop();
