//Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
//only primitive values (string, number, bigint, boolean, undefined, symbol and null)are immutable but an Array is not a primitive value
console.log(friends);

const firstName = "Kaylyn";
const kaylyn = [firstName, "Choi", 2022 - 1993, "student", friends];
console.log(kaylyn);

//Exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
