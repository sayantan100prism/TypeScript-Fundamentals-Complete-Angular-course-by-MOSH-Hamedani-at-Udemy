/*
--> we face type assertion when we are working with any third party library 
   or any other library which is not written in typescript.
--> type assertion is a way to tell the compiler that you know about the type of a 
variable more than it does.
Lets's See an Example   
*/
let message1 = 'abc';// here message1 already specified as a string type variable so no type assertion is required
let endsWithC1 = message1.endsWith('c');
// here endsWithC is a boolean type variable which can only be applied on string type


let message_2; // here message_2 is not specified as a string type variable so type assertion is required
message_2 = 'abc';
let endsWithC2 = (message_2 as String).endsWith('c');

// here we are telling the compiler that message_2 is a string type variable
// thus we are using type assertion to tell the compiler that message_2 is a string type variable
let alternativeWay = (<string>message_2).endsWith('c');

/*
-->Note:
        type assertion does not change the type of the variable at runtime
        it is just a way to tell the compiler about the type of the variable to access the intellisense.
        */