//function is a block of code. It's reusable.
// function declaration
function myfun() {
  console.log("Hello world");
}
myfun(); //calling the function

//function expression
const myapp = function () {
  return `Hello sathi`;
};
console.log(myapp());

//Arrow function
let arrow = (name) => console.log(`my name is ${name}`);
arrow("anugraha");

// function with object
const person = {
  name: "jeewan",
  age: 22,
  location: "kathmandu",
};
let detail = (user) => {
  return `My name is ${user.name}. I am ${user.age} years old. I am 
    from ${user.location}`;
};
console.log(detail(person));

//Note: callback function - when we provide function as a argument
// to other function  that function is known as callback function.
function PersonDetail(name, age, detail) {
  console.log(`My name is ${name}. I am ${age} years old.`);
  detail();
}
// callback function
function details() {
  console.log("Hello!");
}
PersonDetail("anugraha", 22, details);

function showcallfunc(fn) {
  let value = 100;
  fn(value);
}
// function valuepas(value) {
//   console.log(value);
// }

showcallfunc(function (value) {
  console.log(value);
});
