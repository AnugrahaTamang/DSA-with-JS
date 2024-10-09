// Map is one of the most important in js. There are two type
//map. map object and map loop.

// 1. Map object is key value pairs object. It's take the unique value.
// Example:
const map = new Map();
map.set("name", "anugraha tamang");
map.set("age", 22);
map.set("age", 23); //age will be replace
map.set("name", "ramit tamang"); //name will be replace
console.log(map);

console.log(map.get("name"));

//About the map loop
const arr = ["anugra", "ramit", "bisal"];
console.log(arr);
//if i need to add last name
const addname = arr.map((name) => {
  return `${name + " Tamang"}`;
});
console.log(addname);
