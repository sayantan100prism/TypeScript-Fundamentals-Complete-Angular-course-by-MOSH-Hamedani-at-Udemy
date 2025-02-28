let a = 5;
a = 'a'; // This will throw error as we are trying to assign string to a number
// Thus we can identify errors easily in compile time itself in Typescript
//  but this error is not identified in Javascript as it is not a strongly typed language
// and it is not compiled and it is interpreted at runtime thus no errors are thrown at compile time
console.log(a);
let b;
b = 5;
b = 'a'; // This will not throw error both in typescript and javascript as we are not specifying the type of the variable
console.log(b);
//thus we must use type annotations in typescript to avoid such errors
let c;
c = 5;
c = 'a'; // This will throw error in typescript as we are trying to assign string to a number but not in javascript
console.log(c);
//there are several type annotations in typescript
let d;
let e;
let f;
let g;
let h = [1, 2, 3];
let i = [1, true, 'a', false];
let j = [1, true, 'a', false];
// repetation due to const is replaced by enum
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
; // enum is a collection of constants and can be represented more simply
let backgroundColor = color.Red;
