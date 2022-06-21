//Introduction to Objects
const kaylynArray = [
  "Kaylyn",
  "Choi",
  2022 - 1993,
  "student",
  ["Hyun", "Dayoung", "Sohee"],
];
//in arrays, there is no way of giving these elements a name
//we can't reference them by name but only by their order number in which they appear in the array

const kaylyn = {
  firstName: "Kaylyn",
  lastName: "Choi",
  age: 2022 - 1993,
  job: "student",
  friends: ["Hyun", "Dayoung", "Sohee"],
};
//each of keys is called a property
console.log(kaylyn);
