const populations = [38, 51, 1441, 66];

console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentage = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentage);
