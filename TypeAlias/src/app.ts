//? Defining a User Type Alias
type User = {
    id: string;
    name: string;
    email: string;
};

//? Type Alias Example
type Person = {
    name: string;
    age: number;
};

//? Interface Example
interface Person1 {
    name: string;
    age: number;
}

//? Defining Address type
type Address = {
    city: string;
    country: string;
};

//? Defining User1 type (combining Address using intersection `&`)
type User1 = {
    id: string;
    name: string;
} & Address;

//? Defining User2 type (union of User1 and an object containing email)
type User2 = User1 | { email: string };

// Example usage
const userA: User1 = {
    id: "123",
    name: "John Doe",
    city: "New York",
    country: "USA",
};

const userB: User2 = {
    id: "456",
    name: "Jane Doe",
    city: "Los Angeles",
    country: "USA"
};

const userC: User2 = {
    email: "example@example.com",
};

console.log(userA, userB, userC);

//?  Function Type Aliases Example 1
type Add = (x: number, y: number) => number;

const add: Add = (a, b) => a + b;
console.log(add(1, 2)); // 3

//?  Function Type Aliases Example 2
type Callback = (message: string) => void;

const logMessage: Callback = (msg) => console.log(msg);
logMessage("Hello, World!");

//? Readonly & Optional Properties
type Person3 = {
    readonly id: string;
    name: string;
    age?: number;
};

const person3: Person3 = {
    id: "123",
    name: "John Doe",
    age: 30,
};
// person3.id = "456"; // Error: Cannot assign to 'id' because it is a read-only property.
console.log(person3);

//? Utility Types for Cleaner Code
type User3 = { id: string; name: string; email: string };

type PartialUser = Partial<User3>;  // All properties optional
type ReadonlyUser = Readonly<User3>; // Prevents mutation
type UserWithoutEmail = Omit<User3, "email">; // Removes email
type UserNameOnly = Pick<User3, "name">; // Picks only name

const partialUser: PartialUser = { id: "123", name: "John Doe" };
console.log(partialUser);

const readonlyUser: ReadonlyUser = { id: "123", name: "John Doe", email: "example@example.com" };
// readonlyUser.email = "example@example.com"; // Cannot assign to email because it is a read-only property
console.log(readonlyUser);

const userWithoutEmail: UserWithoutEmail = { id: "123", name: "John Doe" };
console.log(userWithoutEmail);

const userNameOnly: UserNameOnly = { name: "John Doe" };
console.log(userNameOnly);


//?  Generic Type Aliases for Maximum Flexibility
type ApiResponse<T> = {
    data: T;
    error?: string;
};

type User7 = { id: string; name: string; email: string };

const userResponse: ApiResponse<User7> = {
    data: { id: "1", name: "Kaushik", email: "kaushik@example.com" },
};
console.log(userResponse);

//? Recursive Type Aliases
type Category = {
    id: string;
    name: string;
    subcategories?: Category[];
};

const categoryTree: Category = {
    id: "1",
    name: "Electronics",
    subcategories: [
        { id: "2", name: "Mobiles" },
        { id: "3", name: "Laptops" },
    ],
};

console.log(categoryTree.subcategories?.map((c) => c.name).join(", "));