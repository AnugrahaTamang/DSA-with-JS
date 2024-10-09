let colors = ["teal", "blue", "red", "green"];
for (let i = 0; i <= colors.length; i++) {
  console.log(colors[i]);
}

const words = ["hello", "bird", "table", "football", "pipe", "code"];

const capWords = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words);

//This is the important concept of forEach Loop.
//ForEach loop doesn't support the return
// Example
const details = ["anugraha tamang", "choke", "dhading"];
// const personDetails = details.forEach((item) => {
//   return item;
// });
// console.log(personDetails); //undefined so

// another one method
const personDetails = details.forEach((item) => {
  if (item.length >= 6) {
    return item;
  }
});
console.log(personDetails);
const personDetail = details.filter((item) => {
  return item;
});
console.log(personDetail); //[ 'anugraha tamang', 'choke', 'dhading' ]
