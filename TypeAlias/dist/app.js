"use strict";
var _a;
const userA = {
    id: "123",
    name: "John Doe",
    city: "New York",
    country: "USA",
};
const userB = {
    id: "456",
    name: "Jane Doe",
    city: "Los Angeles",
    country: "USA"
};
const userC = {
    email: "example@example.com",
};
console.log(userA, userB, userC);
const add = (a, b) => a + b;
console.log(add(1, 2));
const logMessage = (msg) => console.log(msg);
logMessage("Hello, World!");
const person3 = {
    id: "123",
    name: "John Doe",
    age: 30,
};
console.log(person3);
const partialUser = { id: "123", name: "John Doe" };
console.log(partialUser);
const readonlyUser = { id: "123", name: "John Doe", email: "example@example.com" };
console.log(readonlyUser);
const userWithoutEmail = { id: "123", name: "John Doe" };
console.log(userWithoutEmail);
const userNameOnly = { name: "John Doe" };
console.log(userNameOnly);
const userResponse = {
    data: { id: "1", name: "Kaushik", email: "kaushik@example.com" },
};
console.log(userResponse);
const categoryTree = {
    id: "1",
    name: "Electronics",
    subcategories: [
        { id: "2", name: "Mobiles" },
        { id: "3", name: "Laptops" },
    ],
};
console.log((_a = categoryTree.subcategories) === null || _a === void 0 ? void 0 : _a.map((c) => c.name).join(", "));
