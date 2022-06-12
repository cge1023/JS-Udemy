//Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // AND operator
console.log(hasDriversLicense || hasGoodVision); // OR operator
console.log(!hasDriversLicense); // NOT operator

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Kaylyn is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Kaylyn is able to drive");
} else {
  console.log("Someone else should drive");
}
