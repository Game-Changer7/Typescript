"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let direction = Direction.Up;
console.log(direction);
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
const move = (dir) => {
    console.log(`Moving in direction: ${dir}`);
};
move(Direction.North);
(function (Color) {
    Color["R"] = "RED";
    Color["G"] = "GREEN";
    Color["B"] = "BLUE";
})(Color || (Color = {}));
const favoriteColor = Color.R;
console.log(favoriteColor);
var Result;
(function (Result) {
    Result[Result["Success"] = 1] = "Success";
    Result["Failure"] = "FAIL";
})(Result || (Result = {}));
console.log(Result.Success);
console.log(Result.Failure);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
console.log(Size[1]);
console.log(Size.Medium);
const today = 1;
console.log(today);
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["User"] = "USER";
    UserRole["Guest"] = "GUEST";
    UserRole["Editor"] = "EDITOR";
})(UserRole || (UserRole = {}));
function isAdmin(user) {
    return user.role === UserRole.Admin;
}
console.log(isAdmin({ role: UserRole.Admin }));
console.log(isAdmin({ role: UserRole.User }));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Processing"] = "PROCESSING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
function updateOrderStatus(status) {
    console.log(`Order status updated to: ${status}`);
}
updateOrderStatus(OrderStatus.Shipped);
const orderStatus = OrderStatus.Delivered;
console.log(orderStatus);
var FileAccess1;
(function (FileAccess1) {
    FileAccess1[FileAccess1["None"] = 0] = "None";
    FileAccess1[FileAccess1["Read"] = 2] = "Read";
    FileAccess1[FileAccess1["Write"] = 4] = "Write";
    FileAccess1[FileAccess1["ReadWrite"] = 6] = "ReadWrite";
})(FileAccess1 || (FileAccess1 = {}));
console.log(FileAccess1.ReadWrite);
var FileAccess2;
(function (FileAccess2) {
    FileAccess2[FileAccess2["None"] = 0] = "None";
    FileAccess2[FileAccess2["Read"] = 2] = "Read";
    FileAccess2[FileAccess2["Write"] = 4] = "Write";
    FileAccess2[FileAccess2["ReadWrite"] = 6] = "ReadWrite";
})(FileAccess2 || (FileAccess2 = {}));
const fileAccess = FileAccess2.ReadWrite;
console.log(fileAccess);
var FileAccess3;
(function (FileAccess3) {
    FileAccess3[FileAccess3["None"] = 0] = "None";
    FileAccess3[FileAccess3["Read"] = 2] = "Read";
    FileAccess3[FileAccess3["Write"] = 4] = "Write";
    FileAccess3[FileAccess3["ReadWrite"] = 6] = "ReadWrite";
})(FileAccess3 || (FileAccess3 = {}));
const fileAccess3 = FileAccess3.ReadWrite;
console.log(fileAccess3);
