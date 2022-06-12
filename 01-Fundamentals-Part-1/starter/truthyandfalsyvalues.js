//Truthy and Falsy Values

//5 falsy values: 0, '' , undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //flase
console.log(Boolean("Kaylyn")); //true
console.log(Boolean({})); //true
console.log(Boolean("")); //false

const money = 100; //false
//no matter what we put here, if it's not a boolean, JS will try to convert it to a boolean
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height; //didn't assign any value yet -> undefined
if (height) {
  console.log("YAY! height is defined");
} else {
  console.log("height is undefined");
}
