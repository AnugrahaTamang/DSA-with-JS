//Concept one
function Detail(name, age, email, location){
    this.name = name,
    this.age = age,
    this.email = email,
    this.location = location
    this.dataileone= function(){
        console.log(`My name is ${this.name}. I am ${this.age} years old. My email is ${this.email}. I am from ${this.location}`)
    }
}
const anu = new Detail("anugraha tamang", 22, "tamang@gmail.com", "USA")
const jewan = new Detail("jewan", 23, "jewan@gmail.com", "Crosea")
anu.dataileone()
jewan.dataileone()

//concept two

const ramitdetail = {
    detail: function(){
        console.log(`My name is ${this.name}. I am ${this.age} years old.`)
    }
}
const ramit = Object.create(ramitdetail)
ramit.name = "Ramit Tamang"
ramit.age = 22
ramit.detail()

const num = new Number(12)
const strone = new String("hello")
const bool = new Boolean(false)
const arr = new Array([1,2,3])
const obj = new Object({name: "anugraha tamang"})
console.log(num)
console.log(strone)
console.log(arr)
console.log(obj)
console.log(bool)