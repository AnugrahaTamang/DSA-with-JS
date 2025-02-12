const obj = {}
console.log(obj)
console.log(obj.constructor)
console.log(obj.constructor.prototype)
console.log(obj.__proto__.__proto__) //null 

function Myfun(name, age){
    this.name = name,
    this.age = age,
    this.greet = function(){
        console.log(`My name is ${this.name}, My age is ${this.age}`)
    }
}
const anu = new Myfun("anugraha tamang", 22)
anu.greet()
console.log(anu.__proto__.__proto__.__proto__) // null

////// changing the building object
console.log(Array.prototype) // Output: Object(0) []

Array.prototype.pop = function(){
    return "POP IT"
}
const myarr =  ["one", "two", "three"]
console.log(myarr.pop())
console.log(myarr)

//concept two Crating own prototype.
String.prototype.hello = function(){
    console.log(this)
    console.log(this.toUpperCase())
}
console.log("hello anugrah tamang".hello())