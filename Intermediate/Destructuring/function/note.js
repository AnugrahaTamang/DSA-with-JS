const obj = {
  name: "anugraha tamang",
  age: 22,
  location: "kathmandu",
};
function myfun({name, age, locaiton}) {
  console.log(`My name is ${name}. I am ${age} old. I am from ${locaiton}`);
}
myfun(obj);
