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

/* Map Method in js:
1. set(key,value)
2. get(key)
3. delete()
4. clear()
5. has()
6. keys() and values()
*/

const data = new Map()
data.set("name", 'saran')
data.set("age", 22)
console.log(data)
console.log(data.get("name"))
console.log(data.delete("age"))
console.log(data)

const dataone = data.forEach((key,value) => {
  return `${key}: ${value}`
})
console.log(dataone)

