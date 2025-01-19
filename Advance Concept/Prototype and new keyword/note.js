//This is about the new keyword and prototype.
/* Here's what happens behind the scenes when the new keyword is used: 

A new Object is created: The new keyword initiates the creation of a new javascript object.

A prototype is Linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: the constructor function is called with the specified arguments and this is bound
to the newly created object. If no explicit return value is specified from the constructor, javascript assumes this,
the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive 
value (object, array, function etc.), the newly created object is returned.
 */
function myfun(num){
    return num * 2;
}
myfun.fname = "anugraha";
myfun.lname = "tamang";
console.log(myfun(3))
console.log(myfun.fname) // anugraha
console.log(myfun.lname) //tamang
//Point to be noted: function is object is js as well as array.
console.log(myfun.prototype) //{}

//Important of new keyword in js
function createUser(name, score){
    this.name = name,
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`)
}

const chai = new createUser("chai", 25) //here without new keyword we can not access the value
const tea = new createUser("tea", 250)
chai.printMe()


//Prototype
Object.prototype.name = "anugraha tamang"
console.log(name)

let anothername = "anugraha      "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}
anothername.trueLength()
console.log("ramit tamang    ".trueLength())





