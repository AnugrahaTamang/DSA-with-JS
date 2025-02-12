/* The Object.create() method creates a new object, using aan existing object as the 
prototype of the newly created object.
Note: Every object in JavaScript has a built-in property, which is called its prototype
*/
let person = {
    greet: function(){
        console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
    },
}

const anugrah = Object.create(person);
anugrah.firstName = 'Anugraha'
anugrah.lastName = "Tamang"
anugrah.greet();

let jona = Object.create(person, {
    firstName: {value: "jonathan"},
    lastName: {value: "Tamang"},
});
jona.greet()


//Prototype Inheritance

function Person(name, age){
    this.name = name,
    this.age = age,
    this.ParentOne = function(){
        console.log(`My name is ${this.name}, I am ${this.age } years old`)
    }
}
const PersonTwo = function(name, age, location){
    Person.call(this, name, age);
    this.location = location;
}
Person.prototype.sound = function(){
    return "Hello I am from Person"
}
PersonTwo.prototype = Object.create(Person.prototype)
const person11 = new PersonTwo("ramit", 22, "ktm")
console.log(person11)
const per = new Person("Anugraha Tamang", 22)
console.log(person11.sound())
console.log(per)
per.ParentOne()
console.log(per.sound())




