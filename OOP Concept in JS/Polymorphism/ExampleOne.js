//In javascript, polymorphism is typically achieved through method overriding, where a subclass provides its own implementation of a method that is already defined in the parent class.
class Animal{
    constructor(name){
        this.name = name
    }
    makesound(){
        return "Unknown sound"
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }
    //overriding method
    makesound(){
        return "Woff"
    }
}
class Cat extends Animal{
    constructor(name){
        this.name = name
    }
    //overriding
    makesound(){
        return "meow"
    }
}

const dog = new Dog("sam")
console.log(dog)
console.log(dog.name)
console.log(dog.makesound())
