const myCountry = {
  country: "South Korea",
  capital: "Seoul",
  language: "Korean",
  population: 51,
  neighbours: ["China", "Japan"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
