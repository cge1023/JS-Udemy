//Function Declarations vs Expressions
//function are actually values, not a type

// Function declaration
const age1 = calcAge1(1993);

function calcAge1(birthYear) {
  return 2022 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1993);

console.log(age1, age2);
