//Set object are useful when you need to store a list of unique element.

const set = new Set();
set.add("apple");
set.add("banana");
set.add("orange");
set.add("apple");
console.log(set);

const arr = [
  "anugraha tamang",
  "ramit tamang",
  "jeewan tamang",
  "ramit tamang",
];
const newset = new Set(arr);
console.log(newset); //it remove the double element

for (const key of newset) {
  console.log(key);
}
