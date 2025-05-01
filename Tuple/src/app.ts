//? This is an array of mixed data types Example 1
const products: (string | number)[] = [1, "2", 3, "4", 5];
console.log(products);

//? This is a Tuple Fixed Length Array Example 2
const coordinate: [number, number, string] = [ 40.7128, -74.006, 'K'];
console.log(coordinate);

//? Error: This is an array of mixed data types Example
// const coordinate1: [number, number, string] = [ 'K', 40.7128, -74.006,];
// console.log(coordinate1);

//? This is a Tuple Fixed Length Array Example 3
type Position = [number, number];
const position1: Position = [40.7128, -74.006];
const position2: Position = [37.7749, -122.4194];
console.log(position1, position2);


const students: (string | number)[] = [1, 'Kaushik', 2, 'John', 3, 'Jane', 4, '7', 5]
const studentNames: string[] = students.filter((student) => typeof student === 'string') as string[];
// console.log(studentNames.every((student) => student.length > 5));
// console.log(studentNames.map((student) => student.length));
// console.log(studentNames.filter((student) => student.length > 5));
// console.log(studentNames.length);
// console.log(studentNames.forEach((student) => student));
// console.log(studentNames.push('9'));
// console.log(studentNames[Symbol.iterator]);
// console.log(studentNames.concat(['10']));
// console.log(studentNames.copyWithin(1,3));
// console.log(studentNames.entries());
// console.log(studentNames.fill('10'));
// console.log(studentNames.find((student) => student.length > 5));
