//TODO: Constructor
//? First Example
class BottleMaker {
  constructor(public color: string, public capacity: number) {
    this.color = color;
    this.capacity = capacity;
  }
}

let b1 = new BottleMaker("Red", 500);
console.log(b1);
console.log(b1.color);
console.log(b1.capacity);

//? Second Example
class HumanMaker {
  age: number = 0;
  constructor(public name: string, public isHandsome: boolean) {}
}

let h1 = new HumanMaker("John", true);
console.log(h1);
let h2 = new HumanMaker("Jane", false);
console.log(h2);

//? Third Example
class Music {
  public title: string;
  public artist: string;
  constructor(title: string, artist: string) {
    this.title = title;
    this.artist = artist;
  }
}

let m1 = new Music("Song1", "Artist1");
console.log(m1);
m1.title = "Song2";
console.log(m1);

//TODO: Access Modifier
//? public
class Person {
  constructor(public name: string) {
    this.name = name; // Public property
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`); // Public method
  }
}
class Child extends Person {
  constructor(name: string) {
    super(name); // Accessing the parent's constructor
  }

  play() {
    console.log(`${this.name} is playing.`); // Public method
  }
}

const child = new Child("Bob");
console.log(child.name); // Accessible: Output: Bob
child.play(); // Accessible: Output: Bob is playing.
child.greet(); // Accessible: Output: Hello, my name is Bob.

//? private
class BankAccount {
  #balance; // Private property

  constructor(initialBalance: number) {
    this.#balance = initialBalance;
  }

  // Public method to access private property
  getBalance() {
    return `Your balance is $${this.#balance}.`;
  }

  // Public method to modify private property
  deposit(amount: number): void {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    } else {
      console.log("Invalid amount.");
    }
  }
}

const account = new BankAccount(1000);
console.log(account.getBalance()); // Output: Your balance is $1000.
account.deposit(500); // Output: Deposited: $500
// Direct access to #balance is not allowed
// console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class

//? protected
class Animal {
  protected _name: string;

  constructor(name: string) {
    this._name = name; // Simulated protected property
  }

  _speak() {
    // Simulated protected method
    console.log(`${this._name} makes a sound.`);
  }
}

class Dog extends Animal {
  bark() {
    this._speak(); // Accessing protected method
    console.log(`${this._name} says Woof!`);
  }
}

const dog = new Dog("Buddy");
dog.bark();
// Output:
// Buddy makes a sound.
// Buddy says Woof!

// Accessing _name directly (not enforced as private)
// console.log(dog._name); // Output: Buddy

//TODO: Readonly Property
class User {
  constructor(public readonly name: string) {}

  fullName(): void {
    // this.name = "John Doe"; // Error: Cannot assign to 'name' because it is a read-only property
  }
}

const user = new User("John");
console.log(user.name); // Output: John
user.fullName();
console.log(user.name); // Output: John Doe

//TODO: Optional Properties
class Product {
  constructor(
    public name: string,
    public price: number,
    public description?: string
  ) {}
}

let product1 = new Product("Laptop", 999, "A powerful laptop");
console.log(product1);
let product2 = new Product("Phone", 499);
console.log(product2);

//TODO: Parameter Properties
class Car {
  public make;
  public year;
  public model;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.year = year;
    this.model = model;
  }
}

let car1 = new Car("Toyota", "Camry", 2020);
console.log(car1);

//TODO: Getter sand Setters
class World {
  private _population = 0;

  constructor(_population: number) {}

  get population(): number {
    return this._population;
  }

  set population(value: number) {
    if (value > 0) {
      this._population = value;
    }
  }
}

const world = new World(1000);
console.log(world.population);
world.population = 2000;
console.log(world.population);
console.log(world);

//TODO: Static Members
class Car2 {
  static totalCars: number = 0; // Static property

  constructor(public brand: string, public model: string) {
    Car2.totalCars++; // Increment the total count each time a new Car is created
  }

  static displayTotalCars(): void {
    // Static method
    console.log(`Total cars: ${Car2.totalCars}`);
  }
}

const car4 = new Car2("Toyota", "Camry");
const car2 = new Car2("Honda", "Civic");
const car3 = new Car2("Ford", "Mustang");

Car2.displayTotalCars(); // Access static method using the class name: Output: Total cars: 3
console.log(Car2.totalCars); // Access static property using the class name: Output: 3
// car1.displayTotalCars();  // Error: Property 'displayTotalCars' does not exist on type 'Car' because it's a static method.

//TODO: Abstract Classes and Methods
abstract class AnimalAfrica {
  abstract sound(): void; // Abstract method - no implementation

  move(): void {
    console.log("The animal is moving");
  }
}

class DogAmazon extends AnimalAfrica {
  // Implementation of the abstract method sound()
  sound(): void {
    console.log("Bark");
  }
}

class Cat extends AnimalAfrica {
  // Implementation of the abstract method sound()
  sound(): void {
    console.log("Meow");
  }
}

const dog1 = new DogAmazon();
dog1.sound(); // Output: Bark
dog1.move(); // Output: The animal is moving

const cat = new Cat();
cat.sound(); // Output: Meow
cat.move(); // Output: The animal is moving
