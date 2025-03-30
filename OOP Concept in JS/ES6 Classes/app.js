//classes are one of the features introduced in the ES6 version of javascript.
//A class is a blueprint for the object. you can create an ojbect from the class.
//You can think of the class as a sketch(prototype) of a house. it contains all the details about the floor, doors, windows etc. Based on these descriptions, you build the house.
//Since many houses can be made from the same description, we can create many objects from a class.

//creating class
class One {
  constructor(name, age) {
    //Instance members
    (this.name = name),
      (this.age = age),
      (this.greet = function () {
        console.log(`My name is ${this.name}. My age is ${this.age}`);
      });
  }
  //prototype
  getone() {
    console.log(`Name: ${this.name} Age: ${this.age}`);
  }
}
const one = new One("ramit", 22);
console.log(one);
one.greet();
one.getone();

const two = new One("jeewan", 23);
two.greet();
two.getone();
