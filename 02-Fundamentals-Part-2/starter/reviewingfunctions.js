//Reviewing Functions
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  //   return `${firstName} retires in ${retirement} years`;
};
console.log(yearUntilRetirement(1993, "Kaylyn"));
console.log(yearUntilRetirement(1933, "DM"));

//Function declaration : function that can be used before it's declared
function calcAge(birthYear) {
  return 2022 - birthYear;
}

//Function expression : essentially a function value stored in a variable
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

//Arrow function : great for a quick one-line functions. has no this keyword(more later...)
const calcAge = (birthYear) => 2022 - birthYear;

//Three different ways of writing functions, but they all work in a similar way; receive input data, transform data, and then output data

function calcAge(birthYear, firstName) {
  const age = 2022 - birthYear;
  console.log(`${firstName} is ${age} years old`);
  return age;
}
//Parameters : placeholders to receive input values. Like local variables of a function
//Function body : block of code that we waant to reuse. Processes the function's input data
//return statement to output a value from the function and terminate execution

const age = calcAge(1993, "Kaylyn");
//calling, running or invoking the function, using()
//Arguments : actual values of function parameters, to input data
//variable to save returned value(function output)
