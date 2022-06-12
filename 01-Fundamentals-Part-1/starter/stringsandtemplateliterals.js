//String and Template Literals

const firstName = "Kaylyn";
const job = "CEO";
const birthYear = 1993;
const year = 2022;

const Kaylyn =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(Kaylyn);

const KaylynNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(KaylynNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);
