function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage} of the world`;
}

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

console.log(describePopulation("China", 1441));
