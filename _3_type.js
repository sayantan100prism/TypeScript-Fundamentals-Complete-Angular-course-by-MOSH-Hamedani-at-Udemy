var a = 5;
a = 'a';
// This will throw error as we are trying to assign string to a number
// Thus we can identify errors easily in compile time itself in Typescript
//  but this error is not identified in Javascript as it is not a strongly typed language
// and it is not compiled and it is interpreted at runtime thus no errors are thrown at compile time
console.log(a);
var b;
b = 5;
b = 'a';
// This will not throw error both in typescript and javascript as we are not specifying the type of the variable
console.log(b);
//thus we must use type annotations in typescript to avoid such errors
var c;
c = 5;
c = 'a';
// This will throw error in typescript as we are trying to assign string to a number but not in javascript
console.log(c);
//there are several type annotations in typescript
var d;
var e;
var f;
var g;
var h = [1, 2, 3];
var i = [1, true, 'a', false];
var j = [1, true, 'a', false];
// repetation due to const is replaced by enum
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
// so we can see this representation of  javascript  is symmetry is quite complicated for the above enum
// thus we can use typescript enum to write thsi in a more simpler way