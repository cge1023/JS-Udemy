//Object Methods

//functions are value so that we could use it in object as a value

const kaylyn = {
  firstName: "Kaylyn",
  lastName: "Choi",
  birthYear: 1993,
  job: "student", // string value
  friends: ["Hyun", "Dayoung", "Sohee"], // array value
  hasDriversLicense: true, // boolean value

  //   calcAge: function () {
  //     // console.log(this);
  //     return 2022 - this.birthYear;
  //   }, // function value
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(kaylyn.calcAge());

console.log(kaylyn.age);
console.log(kaylyn.age);
console.log(kaylyn.age);

//Challenge
// "Kaylyn is a 29-year old student, and she has a/no driver's license"
console.log(kaylyn.getSummary());
