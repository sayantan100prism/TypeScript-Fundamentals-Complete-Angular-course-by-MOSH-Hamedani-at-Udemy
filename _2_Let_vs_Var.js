function checkVar() {
    // var is function scoped and not block scoped so it is accessible outside the block i.e for loop
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
checkVar();
function checkLet() {
    // let is block scoped so it is not accessible outside the block i.e for loop
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i); // This will throw error
}
checkLet();
//Thus we can identyfy errors easily in compile time itself in Typescript
//  but this error is not identified in Javascript as it is not a strongly typed language 
// and it is not compiled and it is interpreted at runtime thus no errors are thrown at compile time
