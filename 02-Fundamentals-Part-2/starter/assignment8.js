const myCountry = {
  country: "South Korea",
  capital: "Seoul",
  language: "Korean",
  population: 51,
  neighbours: ["China", "Japan"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);
