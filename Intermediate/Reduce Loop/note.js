// Example 1
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((p, c) => {
  console.log(`Previous: ${p}`);
  console.log(`Current: ${c}`);
  return p + c;
}, 0);

console.log(sum);

const arrvalue = [
  {name: "anugraha tamang", prize: 200},
  {name: "ramait", prize: 200},
  {
    name: "jeewan tamang",
    prize: 300,
  },
];
console.log(arrvalue);

const storeone = arrvalue.reduce((p, c) => {
  return p + c.prize;
}, 0);
console.log(storeone);
