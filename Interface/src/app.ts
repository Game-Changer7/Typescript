//TODO: Interface

//? What is Interface
// An interface in TypeScript defines a structure for an object or a class. It specifies the types and shapes that objects should follow, ensuring type safety and making code easier to read and maintain.

//? Declaring an Interface
interface Person {
  name: string;
  age: number;
  greet(): void;
}

//? Using an Interface
const person: Person = {
  name: "John Doe",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.greet(); // Output: Hello, my name is John Doe.


//? Optional Properties
interface Car {
  make: string;
  model: string;
  year?: number; // Optional
}

const car1: Car = { make: "Toyota", model: "Corolla" }; // Valid without year
const car2: Car = { make: "Honda", model: "Civic", year: 2022 }; // Also valid
console.log(car1);
console.log(car2);

//? Readonly Properties
interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 15;  // Error: Cannot assign to 'x' because it is a read-only property

//? Extending Interface
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
  makeSound() {
    console.log("Woof!");
  },
};

myDog.makeSound(); // Output: Woof!

//? Interface with Function Types
interface Add {
  (a: number, b: number): number;
}

const addNumbers: Add = (a, b) => a + b;
console.log(addNumbers(5, 10)); // Output: 15

//? Index Signatures
interface StringDictionary {
  [key: string]: string;
}

const dictionary: StringDictionary = {
  hello: "world",
  foo: "bar",
};
console.log(dictionary.hello); // Output: world

//? Real-world E-commerce Product
interface Product {
  readonly id: string | number;
  name: string;
  price: number;
  description?: string; // Optional property
}

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 1200,
};

console.log(`Product: ${product.name}, Price: $${product.price}`); // Output: Product: Laptop, Price: $1200

//? Interface Method
interface Person1 {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person1) {
  console.log(`Hello, ${person.firstName} ${person.lastName}!`);
  person.sayHello();
}

const person1: Person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sayHello() {
    console.log(`Hi There`);
  },
};

greet(person1);

interface Products {
  [productId: number]: {
    name: string;
    price: number;
    description?: string;
  };
  totalProducts(): number;
  addProduct(product: { name: string; price: number; description?: string }): void;
  removeProduct(productId: number): void;
  updateProduct(productId: number, updatedProduct: {
    name?: string;
    price?: number;
    description?: string;
  }): void;
  getProduct(productId: number): { name: string; price: number; description?: string };
  findProductsByName(name: string): { [productId: number]: { name: string; price: number; description?: string } };
  findProductsByPriceRange(minPrice: number, maxPrice: number): { [productId: number]: { name: string; price: number; description?: string } };
  getAveragePrice(): number;
  getMostExpensiveProduct(): { name: string; price: number; description?: string };
  getCheapestProduct(): { name: string; price: number; description?: string };
  getProductsByCategory(category: string): { [productId: number]: { name: string; price: number; description?: string } };
  getProductsByVendor(vendor: string): { [productId: number]: { name: string; price: number; description?: string } };
}


//? Second Example

interface Product {
  readonly id: string | number;
  name: string;
  price: number;
  description?: string;
  category?: string;
  vendor?: string;
  quantity?: number;
}

class ProductManager {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
    console.log(`Product ${product.name} added successfully.`);
  }

  removeProduct(productId: string | number): void {
    const index = this.products.findIndex((product) => product.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
      console.log(`Product with ID ${productId} removed.`);
    } else {
      console.log(`Product with ID ${productId} not found.`);
    }
  }

  totalProducts(): number {
    return this.products.length;
  }

  listProducts(): void {
    console.log("All Products:", this.products);
  }
}

// Usage Example
const manager = new ProductManager();

manager.addProduct({ id: '1', name: "Laptop", price: 1200, description: "High-performance laptop", category: "Electronics", vendor: "Dell", quantity: 5 });
manager.addProduct({ id: 2, name: "Phone", price: 800, category: "Electronics", vendor: "Samsung", quantity: 10 });

console.log("Total Products:", manager.totalProducts());
manager.listProducts();
manager.removeProduct("1");
console.log("Total Products after removal:", manager.totalProducts());
manager.listProducts();

//? Third example
// interface Product {
//   readonly id: string | number;
//   name: string;
//   price: number;
//   description?: string;
//   category?: string;
//   vendor?: string;
//   quantity?: number;
// }

// // Extending Product with new properties and methods
// interface Product {
//   discount?: number; // Percentage discount
//   ratings?: number;  // Average rating (out of 5)
//   images?: string[]; // Array of image URLs

//   applyDiscount(discountPercentage: number): number;
//   getProductInfo(): string;
// }

// // Implementing Product with extra features
// class ProductItem implements Product {
//   constructor(
//     public id: string | number,
//     public name: string,
//     public price: number,
//     public description?: string,
//     public category?: string,
//     public vendor?: string,
//     public quantity?: number,
//     public discount?: number,
//     public ratings?: number,
//     public images?: string[]
//   ) {}

//   applyDiscount(discountPercentage: number): number {
//     this.discount = discountPercentage;
//     return this.price - (this.price * discountPercentage) / 100;
//   }

//   getProductInfo(): string {
//     return `Product: ${this.name} | Price: $${this.price} | Discount: ${this.discount || 0}% | Ratings: ${this.ratings || "N/A"}`;
//   }
// }

// // Example Usage
// const laptop = new ProductItem(
//   "1",
//   "Laptop",
//   1200,
//   "High-performance laptop",
//   "Electronics",
//   "Dell",
//   5,
//   10, // 10% discount
//   4.5, // 4.5-star rating
//   ["image1.jpg", "image2.jpg"]
// );

// console.log(laptop.getProductInfo());
// console.log("Discounted Price:", laptop.applyDiscount(15)); // Applying 15% discount
