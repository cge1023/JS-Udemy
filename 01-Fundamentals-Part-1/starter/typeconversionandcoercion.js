//Type Conversion and Coercion

//type conversion is when we manually convert from one type to another
const inputYear = "1993";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);

console.log(String(23), 23);

//type coercion is when JavaScript automatically converts types behind scenes for us
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3); //10
console.log("23" + "10" + 3); // 23103
console.log("23" / "2");

let n = "1" + 1; //11
n = n - 1; //10
console.log(n);

//type coercion can introduce many unexpected bugs into our program
