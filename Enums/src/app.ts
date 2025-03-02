//TODO: Enums

//? What is Enum?
//TODO: https://www.typescriptlang.org/docs/handbook/enums.html
// Enums are a way to define a set of named constants. They are a type-safe alternative to using strings or numbers as constants.

//? How to Use Enum?
//TODO: https://www.typescriptlang.org/docs/handbook/enums.html#how-to-use-enums

enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Green;
console.log(myColor); // Output: 1

//? Summary
// Enums are a way to define a set of named constants. They are a type-safe alternative to using strings or numbers as constants.

//? Example
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let direction: Direction = Direction.Up;
console.log(direction); // Output: 0

//? 1. Numeric Enums
// By default, TypeScript enums are numeric and start from 0, incrementing by 1 for each member unless explicitly specified.

enum Direction {
  North = 0, // 0
  East, // 1
  South, // 2
  West, // 3
}

const move = (dir: Direction) => {
  console.log(`Moving in direction: ${dir}`);
};

move(Direction.North); // Output: Moving in direction: 0

//? 2. String Enums
enum Color {
  R = "RED",
  G = "GREEN",
  B = "BLUE",
}

const favoriteColor: Color = Color.R;
console.log(favoriteColor); // Output: "RED"

//? 3. Heterogeneous Enums
enum Result {
  Success = 1,
  Failure = "FAIL",
}

console.log(Result.Success); // Output: 1
console.log(Result.Failure); // Output: "FAIL"

//? Reverse Mapping (for Numeric Enums)
enum Size {
  Small = 1,
  Medium,
  Large,
}

console.log(Size[1]); // Output: "Small"
console.log(Size.Medium); // Output: 2

//? Const Enums
const enum Day {
  Monday,
  Tuesday,
  Wednesday,
}

const today: Day = Day.Tuesday;
console.log(today); // Output: 1

//? Use Cases for Enums
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
  Editor = "EDITOR",
}

function isAdmin(user: { role: UserRole }) {
  return user.role === UserRole.Admin;
}

console.log(isAdmin({ role: UserRole.Admin })); // Output: true
console.log(isAdmin({ role: UserRole.User })); // Output: false

//? Order Status in E-Commerce
enum OrderStatus {
  Pending = "PENDING",
  Processing = "PROCESSING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED",
}
function updateOrderStatus(status: OrderStatus) {
  console.log(`Order status updated to: ${status}`);
}

updateOrderStatus(OrderStatus.Shipped); // Output: Order status updated to: SHIPPED

const orderStatus = OrderStatus.Delivered;
console.log(orderStatus); // Output: "DELIVERED"

//? Enum File Access Example 1
enum FileAccess1 {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
}

console.log(FileAccess1.ReadWrite); // Output: 6

//? Enum File Access Example 2
enum FileAccess2 {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
}
const fileAccess = FileAccess2.ReadWrite;
console.log(fileAccess); // Output: "rw"

//? Enum File Access Example 3
enum FileAccess3 {
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
}
const fileAccess3: FileAccess3 = FileAccess3.ReadWrite;
console.log(fileAccess3); // Output: "rw"
