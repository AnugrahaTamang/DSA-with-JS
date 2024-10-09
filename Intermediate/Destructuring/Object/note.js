//Object Destructuring
const obj = {
  name: "bijay",
  age: 22,
  location: "Nepal",
  Hobbies: ["volleyball", "music", "game"],
};
const {Hobbies} = obj;
console.log(Hobbies);
console.log(Hobbies[2]);

const {name, age, ...c} = obj;
console.log(name);
console.log(age);
console.log(c);
