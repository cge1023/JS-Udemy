//Every value is either a object or a primitive value.

//Object
let me = {
  name: "Kaylyn",
};

//Primitive
let firstName = "Kaylyn";
let age = 28;

//The 7 primitive data types
//1. Number : Floating point number -> Used for decimals and integers
//2. String : Sequence of characters -> Used for text
//3. Boolean : Logical type that can only be true or false -> Used for taking decisions
//4. Undefined : Value taken by a variable that is not yet defined ('empty value')
//5. Null : Also means 'empty value'
//6. Symbol (ES2015) : Value that is unique and cannot be changed
//7. BigInt (ES2020) : Larger integers than the Number type can hold

//JavaScript has dynamic typing : we do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.
//Value has type, NOT variable!

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 28);
console.log(typeof "Kalyn");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

//Dynamic typing
year = 1991;
console.log(typeof year);

console.log(typeof null);
