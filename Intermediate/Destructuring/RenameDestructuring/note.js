//It's not possible to array.
//But it is possible with object.
const obj = {name: "ramam", age: 23};
const {name: personname, age: personage} = obj;
console.log(personname);
// console.log(name); It's not possible after rename
console.log(personage);
