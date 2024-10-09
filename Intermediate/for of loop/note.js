const arr = ["anugraha ", "ramit", "jeewan"];
for (let key of arr) {
  console.log(key);
}

for (const val of arr) {
  console.log(`This is the ${val}`);
}

let val = "anugraha tamang";
for (const key in val) {
  console.log(key);
}
