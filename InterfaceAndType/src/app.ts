//? Interface
interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "John",
    age: 30
}

console.log(user);

//? type
type Person = {
    name: string;
    age: number;
}

const person: Person = {
    name: "John",
    age: 30
}

console.log(person);

//? Readonly Properties
interface Car {
    readonly brand: string;
    model: string;
}

const myCar: Car = {
    brand: "Toyota",
    model: "Corolla"
}
// myCar.brand = "Honda"; // ❌ Error: Cannot assign to 'brand' because it is a read-only property
console.log(myCar);

//?  Optional Properties
interface Girl {
    name: string;
    age?: number;
}
const p1: Girl = { name: "Anushka" }; // ✅ Valid
const p2: Girl = { name: "Anushka", age: 25 }; // ✅ Valid

//?  Extending Interfaces
interface Animal {
    name: string;
    makeSound(): void;
}
interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Buddy",
    breed: "Labrador",
    makeSound(): void {
        console.log("Woof!");
    }
}

console.log(myDog);

//? Extending type with Intersection (&)
type Point = {
    x: number;
    y: number;
}

type ColorPoint = Point & {
    color: string;
}

const point: ColorPoint = {
    x: 10,
    y: 20,
    color: "red"
}

console.log(point);

//? Extending Multiple Interfaces
interface A {
    propA: string;
}

interface B {
    propB: number;
}

interface C extends A, B {
    propC: boolean;
}

const obj: C = {
    propA: "A",
    propB: 10,
    propC: true
}

console.log(obj);

//? Extending Multiple Types
type A1 = {
    propA: string;
}

type B1 = {
    propB: number;
}

type C1 = A1 & B1 & {
    propC: boolean;
}

const ob: C1 = {
    propA: "A",
    propB: 10,
    propC: true
}

console.log(ob);

//? Merging with Methods
interface Logger {
    log(message: string): void;
}

interface Logger {
    error(message: string): void;
}

class ConsoleLogger implements Logger {
    log(message: string) {
        console.log("Log:", message);
    }

    error(message: string) {
        console.error("Error:", message);
    }
}

const logger: Logger = new ConsoleLogger();
console.log(logger);
