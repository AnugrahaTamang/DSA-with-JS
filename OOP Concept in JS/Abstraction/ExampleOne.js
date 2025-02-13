// Abstract class (providing a blueprint for subclasses)
class Animal{
    constructor(name){
        this.name = name;
    }
    //Abstract method (to be implemented by subclasses)
    makesound(){
        throw new Error("Method (makesound) must be implemented")
    }

}

class Dog extends Animal{
    constructor(name){
        super(name)
    }

    //Implementing the abstract method
    makesound(){
        return "woff"
    }
}

//concrete subclass 
class Cat extends Animal{
    constructor(name){
        super(name)
    }
    makesound(){
        return "meow"
    }
}
const dog = new Dog("BUddy")
console.log(dog.name)
console.log(dog.makesound())

const cat = new Cat("susy")
console.log(cat.name)
console.log(cat.makesound())
 