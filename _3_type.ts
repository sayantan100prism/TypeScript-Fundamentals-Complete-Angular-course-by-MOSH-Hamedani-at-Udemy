let a = 5;
a = 'a';
// This will throw error as we are trying to assign string to a number
// Thus we can identify errors easily in compile time itself in Typescript
//  but this error is not identified in Javascript as it is not a strongly typed language
// and it is not compiled and it is interpreted at runtime thus no errors are thrown at compile time
console.log(a);


let b;
b = 5;
b = 'a';
// This will not throw error both in typescript and javascript as we are not specifying the type of the variable
console.log(b);

//thus we must use type annotations in typescript to avoid such errors
let c: number;
c = 5;
c = 'a';
// This will throw error in typescript as we are trying to assign string to a number but not in javascript
console.log(c);



//there are several type annotations in typescript
let d: number;
let e: boolean;
let f: string;
let g: any;
let h: number[] = [1, 2, 3];
let i: any[] = [1, true, 'a', false];
let j: any = [1, true, 'a', false];




// repetation due to const is replaced by enum
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;



enum color { Red = 0, Green = 1, Blue = 2 }; // enum is a collection of constants and can be represented more simply
let backgroundColor = color.Red;