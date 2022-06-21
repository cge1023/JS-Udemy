//Dot vs Bracket Notation
const kaylyn = {
  firstName: "Kaylyn",
  lastName: "Choi",
  age: 2022 - 1993,
  job: "student",
  friends: ["Hyun", "Dayoung", "Sohee"],
};
console.log(kaylyn);

console.log(kaylyn.lastName);
console.log(kaylyn["lastName"]);

const nameKey = "Name";
console.log(kaylyn["first" + nameKey]);
console.log(kaylyn["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Kaylyn? Choose between firstName, lastName, age, job, and friends"
);
console.log(kaylyn[interestedIn]);

if (kaylyn[interestedIn]) {
  console.log(kaylyn[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

kaylyn.location = "Canada";
kaylyn["instagram"] = "choicoding";
console.log(kaylyn);

//Challenge
//"Kaylyn has 3 friends, and her best friend is called Hyun"

console.log(
  `${kaylyn.firstName} has ${kaylyn.friends.length} friends, and her best friend is ${kaylyn.friends[0]}`
);
