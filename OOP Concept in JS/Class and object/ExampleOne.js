//Simple class concept One
class Person{
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age
    }
    greet(){
        return `My name is ${this.fname} ${this.lname}. I am ${this.age} years old.`
    }
}
class Person2 extends Person{
    constructor(fname, lname, age, location){
        super(fname, lname, age)
        this.location = location
    }
    greetOne(){
        return `My name is ${this.fname} ${this.lname}. I am ${this.age} Years old. I am from ${this.location}`
    }
}

const anu = new Person("Anugraha", "Tamang", 22)
const jewan = new Person2("Jewan", "Tamang", 23, "KTM")
console.log(anu)
console.log(jewan)
console.log(anu.greet())
console.log(jewan.greetOne())
