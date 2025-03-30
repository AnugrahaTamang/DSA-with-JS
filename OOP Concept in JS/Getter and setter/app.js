class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
  //get the value from the class
  get password() {
    return `${this._password}tamang`;
  }
  //set the value inside the class but we can not return the value inside the set.
  set password(value) {
    this._password = value;
  }
}

const anugraha = new User("anugraha.ai", "abc");

console.log(anugraha.password);
