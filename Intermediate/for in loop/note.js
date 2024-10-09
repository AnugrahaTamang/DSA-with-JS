const obj = {
  name: "ramit",
  age: 22,
};
// for (const key in obj) {
//   console.log(key);
//   console.log(obj[key]);
// }

let list = ["one", "two", "three"];
for (let index in list) {
  console.log(`${index}: ${list[index]}`);
}

let store = "hello sansar";
for (let value in store) {
  console.log(value);
}
