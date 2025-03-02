//TODO: Inference

//? What is Inference?
// Inference is the process of automatically determining the type of a variable based on its value.

let tech: string | number = "TypeScript";
tech = 12;
console.log(tech);

//? Object
let user: { name: string; age: number } = { name: "John", age: 30 };
user = { name: "Jane", age: 25 };
console.log(user);

//? Array
let numbers: number[] = [1, 2, 3];
numbers = [4, 5, 6];
console.log(numbers);

//? Tuple
let coordinate: [number, number] = [40.7128, -74.006];
coordinate = [37.7749, -122.4194];
console.log(coordinate);

//? Enum
enum Color {
  Red,
  Green,
  Blue,
}
let myColor: Color = Color.Green;
console.log(myColor);

//? Any
let data: any = 10;
data = "Hello";
console.log(data);

//? Unknown
let value: unknown = 10;
value = "Hello";
console.log(value);

//? Void
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}
greet("John Doe");

// //? Never
// function error(message: string): never {
//     throw new Error(message);
// }
// error('Something went wrong');

type Product = {
  name: string;
  price: number;
};

function calculateCartTotal(cart: Product[], discount:number = 0): number {
  console.log(discount);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return total - total * discount;
}

const cart: Product[] = [
  { name: "Phone", price: 699 },
  { name: "Charger", price: 29 },
  { name: "Headphones", price: 199 },
];

const total = calculateCartTotal(cart, 0.1); // Applying a 10% discount
console.log(`Total cost: $${total}`); // Output: Total cost: $836.7
