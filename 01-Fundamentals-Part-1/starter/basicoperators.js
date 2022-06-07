//Basic Operators

//Math Operators
const now = 2022;
const ageKaylyn = now - 1993;
const ageSarah = now - 2005;
console.log(ageKaylyn, ageSarah);

//2 ** 3 means 2 to the power of 3 = =2 * 2 * 2
console.log(ageKaylyn * 2, ageKaylyn / 10, 2 ** 3);

const firstName = "Kaylyn";
const lastName = "Choi";
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

//Comparison Operators
console.log(ageKaylyn > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1993 > now - 2005);
