class One {
  constructor(name) {
    this.name = name;
  }
  makesound() {
    throw new Error("Method makesound must be implemented");
  }
}
class Two extends One {
  constructor(name) {
    super(name);
  }
  //Implementing abstraction
  makesound() {
    return `Hello ${this.name}`;
  }
}
class Three extends One {
  constructor(name) {
    super(name);
  }
  makesound() {
    return `My name is ${this.name}`;
  }
}
const one = new Two("ramit");
console.log(one);
console.log(one.makesound());

const two = new Three("anugraha");
console.log(two);
console.log(two.makesound());
