//'Concept One
function Dog(name){
    this.name = name;
}
Dog.prototype.sound = function(){
    console.log("wou wou wou")
}
const dog11 = new Dog("bulbul")
const dog22 = new Dog("hulhul")
dog11.sound()
dog22.sound()

const Cat = function(){
    console.log("meu meu meu")
}
const cat1 = new Cat();
console.log(cat1)
// console.log(cat1.sound()) //Error 
//Because cat don't can access the dog prototype.

//Concept Two: Inheritance prototype in javascript. where cat easily access the dog prototype method.
/*Object.create()method: The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. 
*/
function Animal(name){
    this.name = name
}
Animal.prototype.sound = function(){
    return "Animal sound"
}
const animal1 = new Animal("frog")
console.log(animal1)

function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype)
const dog1 = new Dog("Buddy", "Genus")
console.log(dog1)
console.log(dog1.sound())