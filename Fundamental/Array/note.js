//Array is special type of object that store different type of element.
// That element may be object,string,number,boolean etc.
let arr = [1, 2, "anugraha", true];
console.log(arr);
console.log(arr[3]); //true

let fruit = new Array("banana", "apple", "mango");
console.log(fruit);
console.log(fruit instanceof Array); //True

//insertion the end of element
let color = ["red", "green", "white"];
console.log(color);
console.log(color.push("purple"));
console.log(color);

//insertion the first element position
console.log(color.unshift("blue"));
console.log(color);

//Insertion of random
console.log(color.splice(2, 1, "aqua", "black"));
console.log(color); //output: [ 'blue', 'red', 'aqua', 'black', 'white', 'purple' ]

//sorting
console.log(color.sort());

//difference between slice and splice in array
console.log(color); //output: [ 'aqua', 'black', 'blue', 'purple', 'red', 'white' ]
console.log(color.slice(2, 6));
console.log(color); //Output: [ 'aqua', 'black', 'blue', 'purple', 'red', 'white' ]

console.log(color.splice(2, 5));
console.log(color); //Output: [ 'aqua', 'black' ]

//Flat  used in two dimensional array
let store = [
  "apple",
  "banana",
  [1, 2, 3],
  ["one", "two", "three", [100, 200, 300], "hey"],
  "apple",
];
console.log(store);
console.log(store.flat(Infinity)); //Imp

//Convert to Array
console.log(Array.isArray("Anugraha tamang")); //false
console.log(Array.from("Anugraha Tamang"));
/*Output will be: [
  'A', 'n', 'u', 'g',
  'r', 'a', 'h', 'a',
  ' ', 'T', 'a', 'm',
  'a', 'n', 'g'
]*/

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //Covert variable value into array. [ 100, 200, 300 ]
