//This is best example of enhance object literals
function user(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
    intro: function () {
      console.log(
        `My name is ${name}. I am ${age} years old. I am from ${location}`
      );
    },
  };
}
const anu = user("anugraha", 22, "Kathmandu");
console.log(anu);
anu.intro();

function user2(name, location) {
  return {
    name,
    location,
  };
}
const person = user2("ramit", "Nepal");
console.log(person);
