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
class ProductManager {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
        console.log(`Product ${product.name} added successfully.`);
    }
    removeProduct(productId) {
        const index = this.products.findIndex((product) => product.id === productId);
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log(`Product with ID ${productId} removed.`);
        }
        else {
            console.log(`Product with ID ${productId} not found.`);
        }
    }
    totalProducts() {
        return this.products.length;
    }
    listProducts() {
        console.log("All Products:", this.products);
    }
}
const manager = new ProductManager();
manager.addProduct({ id: '1', name: "Laptop", price: 1200, description: "High-performance laptop", category: "Electronics", vendor: "Dell", quantity: 5 });
manager.addProduct({ id: 2, name: "Phone", price: 800, category: "Electronics", vendor: "Samsung", quantity: 10 });
console.log("Total Products:", manager.totalProducts());
manager.listProducts();
manager.removeProduct("1");
console.log("Total Products after removal:", manager.totalProducts());
manager.listProducts();
