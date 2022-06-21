//Basic Array Operations (Methods)

//Add elements (push, unshift)
//push method : adds elements to the end of an array
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
//since push is a function here, it can also return something (Jay is an argument) push function does return a value and the value that it returns is the length of the new array
console.log(friends);
console.log(newLength);

//unshift method : adds elements to the beginning of an array also returns the length of the new array
friends.unshift("John");
console.log(friends);

//Remove elements (pop, shift)
//pop method : will remove the last element of the array / returns the removed element
const popped1 = friends.pop();
const popped2 = friends.pop();
console.log(friends);
console.log(popped1, popped2);

//shift method : will remove the first element of the array
friends.shift();
console.log(friends);

//indexOf : tells us in which position a certain element is in the array / returns index of the element
console.log(friends.indexOf("Steven")); //1
console.log(friends.indexOf("Bob")); //-1

//includes : ES6 method / returns true if the element is in the array and false if it's not
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
