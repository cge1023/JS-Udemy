const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.markBMI = this.mass / this.height ** 2;
    return this.markBMI;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.johnBMI = this.mass / this.height ** 2;
    return this.johnBMI;
  },
};

console.log(
  mark.markBMI > john.johnBMI
    ? `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
        john.fullName
      }'s (${john.calcBMI()})`
    : `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
        mark.fullName
      }'s (${mark.calcBMI()})`
);
