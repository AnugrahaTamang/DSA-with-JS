//Constructor function in javascript are regular functions used with new keyword to create and initialize ojbject with shared
//properties and methods. They act as blueprint for creating multiple instances of objects with same structure and behaviour.

//Example of constructor function
function CreateOne(name, age, pl) {
  (this.name = name),
    (this.age = age),
    (this.pl = pl),
    (this.greet = function () {
      console.log(
        `My name is ${this.name}. I am ${this.age}. I love ${this.pl}`
      );
    });
  console.log(this);
}
const one = new CreateOne("anugraha", 22, "python");
one.greet();

//Built in  constructor
const arr = new Array("one", "two");
console.log(arr);

const str = new String("Hello I love Nepal");
console.log(str);

const num = new Number(12);
console.log(num);
