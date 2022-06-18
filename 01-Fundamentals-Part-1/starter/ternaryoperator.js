//The Conditional (Ternary) Operator === expression
const age = 15;
age >= 18
  ? console.log("I like to drink wine") // if part
  : console.log("I like to drink water"); // else part

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
