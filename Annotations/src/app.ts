//TODO: Annotations
//? What is Annotation?
// Annotations are used to specify the type of a variable, function, or class.

//! Syntax 
// let variableName: type = value;

//? String
let message: string = "Hello World";
console.log(message);

//? Number
let age: number = 21;
console.log(age);

//? Boolean
let isLoggedIn: boolean = true;
console.log(isLoggedIn);

//? Null
let myNull: null = null;
console.log(myNull);

//? Undefined
let myUndefined: undefined = undefined;
console.log(myUndefined);

//? Symbol
let mySymbol: symbol = Symbol("mySymbol");
console.log(mySymbol);

//? Object
let person: object = { name: "John", age: 30 };
console.log(person);

//? Array
let numbers: number[] = [1, 2, 3];
console.log(numbers);

//? Tuple
let user: [string, number] = ["John", 30];
console.log(user);

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
let data1: any = "Hello";
data = 42; // No error
console.log(data);   

//? Unknown 
let input: unknown = "Hello";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}

//? Void
//! Syntax
// function functionName(): void {
//     Function body
// }
let greet: (name: string) => void = (name: string) => {
    console.log(`Hello, ${name}!`);
};

greet("John Doe");

// //? Never
// let error: never = (() => {
//     throw new Error("Something went wrong");
// })();

//? Type Assertions
let message1: any = "Hello World";
let message2 = <string>message1;    
console.log(message2);

//? Union Types
let score: number | string = 85;
score = "85";
console.log(score); 

//? Intersection Types
type User = {
    name: string;
    age: number;
};
type Admin = {
    role: string;
};
let user1: User & Admin = {
    name: "John",
    age: 30,


    role: "Admin",
};      
console.log(user1);

//! Type Aliases
type Person = {
    name: string;
    age: number;
    gender: string;
};
let person1: Person = {
    name: "John",
    age: 30,
    gender: "Male" ,
};  
console.log(person1);

//? Literal Types
type Size = "small" | "medium" | "large";
let size: Size = "medium";
console.log(size);  

//? Nullable Types
let name1: string | null = "John Doe";
name1 = null;
console.log(name);  

//? Optional Properties 
type Product = {
    name: string;
    price: number;
    description?: string;
};

let product: Product = {
    name: "Laptop",
    price: 999,
    description: "A powerful laptop",   
}

console.log(product);

//? Readonly Properties
type Employee = {
    readonly id: number;
    name: string;
    age: number;
};
let employee: Employee = {
    id: 1,
    name: "John Doe",
    age: 30,
};
console.log(employee);

//? Parameter Properties
type Product1 = {
    name: string;
    price: number;
    description?: string;
};

function createProduct(name: string, price: number, description?: string): Product1 {
    return {
        name,
        price,
        description,
    };
}

let product1 = createProduct("Laptop", 999);
console.log(product1);

//? Optional Chaining
type User1 = {
    name: string;
    age: number;
    address?: {
        street: string;
        city: string;
        country: string;
    };
};

let user2: User1 = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
    },
}

console.log(user2.address?.street);

//? Nullish Coalescing Operator
let name2 = "John Doe";
console.log(name2 ?? "Guest");

//? Optional Chaining and Nullish Coalescing Operator
type User2 = {
    name: string;
    age: number;
    address?: {
        street: string;
        city: string;
        country: string;
    };
};

let user3: User2 = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
    },
}

console.log(user3.address?.street ?? "Unknown");

//? Optional Chaining and Nullish Coalescing Operator
type User3 = {
    name: string;
    age: number;
    address?: {
        street: string;
        city: string;
        country: string;
    };
};

let user4: User3 = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
    },
}

console.log(user4.address?.street ?? "Unknown");

//? Optional Chaining and Nullish Coalescing Operator
type Product3 = {
    name: string;
    price: number;
    description?: string;
};

function createProduct2(name: string, price: number, description?: string): Product3 {
    return {
        name,
        price,
        description,
    };
}   

let product3 = createProduct2("Laptop", 999);
console.log(product3);



