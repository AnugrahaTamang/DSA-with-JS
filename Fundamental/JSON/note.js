const obj = {
  name: "ramit",
  age: 22,
  greet: function () {
    console.log("Hello Nepal");
  },
  location: "kathmandu",
};
console.log(obj);

//Json formatting

const jsonformatting = JSON.stringify(obj);

console.log(jsonformatting);

//Json formatting to string
const jsonObject = JSON.parse(jsonformatting);
console.log(jsonObject);
