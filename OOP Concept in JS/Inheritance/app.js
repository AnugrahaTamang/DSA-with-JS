class User{
    constructor(username, age, location){
        this.username = username;
        this.age = age;
        this.location = location;
    }
    myfun(){
        return `My name is ${this.username}. I am ${this.age} years old. I live in ${this.location}`
    }
}

class Teacher extends User{
    constructor(hobby, language){
        super(username, location); //this jsut calls the parent call  constructor
        this.hobby = hobby;
        this.language = language;
    }
}

// const one = new User("Anugraha Tamang", "22", "Nepal")
// console.log(one)
// console.log(one.myfun())

const two = new Teacher("music", "Nepali");
console.log(two)