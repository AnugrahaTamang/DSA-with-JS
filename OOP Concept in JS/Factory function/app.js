//factory function: factory function is a that type of function which is used to create and return object.
function myfun() {
  return {
    name: "anugraha tamang",
    age: 22,
  };
}
console.log(myfun());

function Hello(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(`My name is ${this.name}. My age is ${this.age}`);
    },
  };
}

const one = Hello("anugraha tamang", 22);
one.greet();
