const neighbours = ["Korea", "China", "Japan"];

neighbours.push("Utopia");
neighbours.pop();

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Korea")] = "Republic of Korea";
console.log(neighbours);
