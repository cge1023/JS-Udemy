//let, const and var

//let : to declare variables that can change later (block scope)
let age = 30;
age = 31;

//const : to declare variables that are not supposed to change at any point in the future (immutable variable)
const birthYear = 1993;
// birthYear = 1994;

//when using const, we need basically an initial value.
// const job;

//var : is basically the old way of defining variables, should be completely avoided (function scope)
var job = "programmer";
job = "teacher";

lastName = "Choi";
console.log(lastName);
