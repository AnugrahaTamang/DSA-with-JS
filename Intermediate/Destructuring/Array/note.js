const arr = ["red", "blue", "yellow"];
const [a, , b] = arr;
console.log(a); //red
console.log(b); //yellow

const [s, ...y] = arr;
console.log(a);
console.log(y);

function f() {
  return [12, 23, 45, 45];
}
let x, z;
[x, ...z] = f();
console.log(x);
console.log(z);

const details = [
  {name: "ramit", cast: "tamang"},
  {age: 22},
  {location: "Kathamandu"},
];
console.log(details);
const [{name, cast}, {age}, {location}] = details;
console.log(name);
console.log(cast);
console.log(location);
console.log(age);
