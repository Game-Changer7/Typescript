"use strict";
function identity(arg) {
    return arg;
}
const output = identity("myString");
const output1 = identity(42);
const output2 = identity(true);
console.log(output);
console.log(output1);
console.log(output2);
function combine(arg1, arg2) {
    return [arg1, arg2];
}
const combined = combine("Hello", 123);
console.log(combined);
class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
const pair = new Pair("Hello", 123);
console.log(pair.first);
console.log(pair.second);
class Box {
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
const stringBox = new Box("Hello");
console.log(stringBox.getContent());
const numberBox = new Box(42);
console.log(numberBox.getContent());
const pair1 = { first: "Hello", second: 123 };
console.log(pair1.first);
console.log(pair1.second);
function logLength(arg) {
    console.log(arg.length);
}
logLength("Hello");
logLength([1, 2, 3]);
const pair2 = { first: "Hello", second: 123 };
console.log(pair2.first);
console.log(pair2.second);
function createArray(length, value) {
    return Array(length).fill(value);
}
const stringArray = createArray(3, "Hello");
console.log(stringArray);
const numberArray = createArray(2, 42);
console.log(numberArray);
function fetchUser() {
    return {
        status: 200,
        message: "Success",
        data: { name: "John", age: 30 },
    };
}
const userResponse = fetchUser();
console.log(userResponse.data.name);
const partialUser = { name: "Alice" };
const readonlyUser = { name: "Bob", age: 25 };
const userRecord = {
    user1: { name: "John", age: 30 },
    user2: { name: "Jane", age: 28 },
};
const userPick = { name: "Alice" };
function getRandomKeyValue(obj) {
    const keys = Object.keys(obj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return [randomKey, obj[randomKey]];
}
const obj = { a: 1, b: 2, c: 3 };
const [randomKey, randomValue] = getRandomKeyValue(obj);
console.log(randomKey);
console.log(randomValue);
function getRandomKeyValuePair(obj) {
    const keys = Object.keys(obj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randomKey, value: obj[randomKey] };
}
const obj1 = { a: 1, b: 2, c: 3 };
const { key, value } = getRandomKeyValuePair(obj1);
console.log(key);
console.log(value);
