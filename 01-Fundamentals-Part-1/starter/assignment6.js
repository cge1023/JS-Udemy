const country = "South Korea";
const continent = "Asia";
const language = "Korean";
let population = 51628117;
let avgPopulation = 33000000;
let description = `${country} is in ${continent}, and its ${population} people speak ${language}`;

if (population > avgPopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${avgPopulation - population} below average`
  );
}
