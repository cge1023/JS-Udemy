//Functions

function logger() {
  console.log("My name is Kaylyn");
}

// calling / running / invoking function
logger();
logger();
logger();

//parameters
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

//arguments : the actual values of the parameters
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
