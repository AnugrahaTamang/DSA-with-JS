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
/* There are different type of set method:
1. add()
2. has()
3. delete()
4. values()
5. keys()
6. clear()
7. next()
8. entries()
//Method used in set
1. forEach()
2. for-of
*/

const setone = new Set([12,13,14])
console.log(setone)
setone.add(20)
console.log(setone)
console.log(setone.has(12))
console.log(setone.delete(12))
console.log(setone)
const dataone = setone.forEach((keys,values) => {
  console.log(`${keys} : ${values}`)
})
console.log(dataone)
const datatwo = setone.entries()
console.log(datatwo.next.values)
console.log(datatwo.next.values)

const datafour = setone.values()
console.log(datafour.next().value) //13
console.log(datafour.next().value) //14