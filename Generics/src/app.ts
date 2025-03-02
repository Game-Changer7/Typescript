//TODO: Generics

//? What is a Generic?
// Generic allows you to create a function that can work with different types of data

//? Example
function identity<T>(arg: T): T {
  return arg;
}

const output = identity<string>("myString");
const output1 = identity<number>(42);
const output2 = identity<boolean>(true); // <boolean>
console.log(output);
console.log(output1);
console.log(output2);

//? Summary
// Generics allow you to create functions that can work with different types of data. It is useful for creating reusable components that can handle different types of data.

//? 3. Generic Functions
function combine<T, U>(arg1: T, arg2: U): [T, U] {
  return [arg1, arg2];
}

const combined = combine("Hello", 123);
console.log(combined); // Output: [ 'Hello', 123 ]

//? 4. Generic Classes
class Pair<T, U> {
  first: T;
  second: U;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }
}

const pair = new Pair<string, number>("Hello", 123);
console.log(pair.first); // Output: 'Hello'
console.log(pair.second); // Output: 123

//? Another classes Generics
class Box<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent()); // Output: Hello

const numberBox = new Box<number>(42);
console.log(numberBox.getContent()); // Output: 42

//? Generic Interfaces
interface Pair<T, U> {
  first: T;
  second: U;
}

const pair1: Pair<string, number> = { first: "Hello", second: 123 };
console.log(pair1.first); // Output: 'Hello'
console.log(pair1.second); // Output: 123

//? 6. Constraints on Generics
function logLength<T extends { length: number }>(arg: T): void {
  console.log(arg.length);
}

logLength("Hello"); // Output: 5
logLength([1, 2, 3]); // Output: 3
// logLength(42);     // Error: number does not have a length property

//? 7. Generic Types
type Pair1<T, U> = {
  first: T;
  second: U;
};

const pair2: Pair1<string, number> = { first: "Hello", second: 123 };
console.log(pair2.first); // Output: 'Hello'
console.log(pair2.second); // Output: 123

//? Default Values for Generic
function createArray<T = string>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

const stringArray = createArray(3, "Hello");
console.log(stringArray); // Output: [ 'Hello', 'Hello', 'Hello' ]

const numberArray = createArray<number>(2, 42);
console.log(numberArray); // Output: [ 42, 42 ]

//? 8. Real-World Scenario: Generic API Response
interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

function fetchUser(): ApiResponse<{ name: string; age: number }> {
  return {
    status: 200,
    message: "Success",
    data: { name: "John", age: 30 },
  };
}

const userResponse = fetchUser();
console.log(userResponse.data.name); // Output: John

//? 9. Generic Utility Types (Built-In)
interface User {
  name: string;
  age: number;
}

// Partial makes all properties optional
const partialUser: Partial<User> = { name: "Alice" };

// Readonly makes properties immutable
const readonlyUser: Readonly<User> = { name: "Bob", age: 25 };
// readonlyUser.age = 26;  // Error: Cannot assign to 'age' because it is a read-only property

// Record creates a type with keys of one type and values of another
const userRecord: Record<string, User> = {
  user1: { name: "John", age: 30 },
  user2: { name: "Jane", age: 28 },
};

// Pick creates a type with only the specified properties
const userPick: Pick<User, "name"> = { name: "Alice" };

//? Generic Key Value Pairs
function getRandomKeyValue<T extends object>(obj: T): [keyof T, T[keyof T]] {
  const keys = Object.keys(obj) as (keyof T)[];
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return [randomKey, obj[randomKey]];
}

const obj = { a: 1, b: 2, c: 3 };
const [randomKey, randomValue] = getRandomKeyValue(obj);
console.log(randomKey); // Output: "b"
console.log(randomValue); // Output: 2

//? Another Generic Key Value Pairs
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randomKey, value: obj[randomKey] };
}

const obj1 = { a: 1, b: 2, c: 3 };
const { key, value } = getRandomKeyValuePair<number>(obj1);
console.log(key); // Output: "b"
console.log(value); // Output: 2

// console.log(document);
