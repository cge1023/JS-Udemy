//Data 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
//const markHigherBMI = markBMI > johnBMI ? "true" : "false";

console.log(markHigherBMI); // true

//Data 2
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI); // false
