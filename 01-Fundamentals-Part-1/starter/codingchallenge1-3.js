// const avgDolphins = (96 + 108 + 89) / 3;
// const avgKoalas = (88 + 91 + 110) / 3;

// console.log(avgDolphins, avgKoalas);

// if (avgDolphins > avgKoalas) {
//   console.log("Dolphins wins!");
// } else if (avgDolphins === avgKoalas) {
//   console.log("Draw!");
// } else {
//   console.log("Koalas wins!");
// }

//Bonus 1
// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 123) / 3;
// console.log(avgDolphins, avgKoalas);

// if (avgDolphins > avgKoalas && avgDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
//   console.log("Koalas win the trophy");
// } else if (avgDolphins === avgKoalas) {
//   console.log("Both win the trophy");
// }

//Bonus 2
const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 106) / 3;
console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  avgDolphins === avgKoalas &&
  avgDolphins >= 100 &&
  avgKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No team wins the trophy");
}
