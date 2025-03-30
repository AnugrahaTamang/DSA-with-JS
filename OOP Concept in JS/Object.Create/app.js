//The Object.create() method is used to create the object.
const obj = {
  greet: function () {
    console.log(`My name is ${this.name}. I am ${this.age} years old`);
  },
};
const anu = Object.create(obj);
anu.name = "Anugraha";
anu.age = 22;
anu.greet();

let ramit = Object.create(obj, {
  name: { value: "ramit" },
  age: { value: 23 },
});
ramit.greet();
