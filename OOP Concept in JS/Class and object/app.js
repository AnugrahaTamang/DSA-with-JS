/*Class: class is the blueprint of object.
Object: Object is the collection of key value pairs.
Constructor: Constructor function in javascript are regular functions
used with the new keyword to create and initialize objects with shared properties
and methods. They act as blueprints for creating instances of objects with the same
structure and behaviour

*/
//Delcaration of class
class user{
    constructor(username, email, password){
        //Instance members
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryption(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const userone = new user("anugrah", "tamang@gmail.com", "heyone231")
console.log(userone)
console.log(userone.encryption())
console.log(userone.changeUsername())


//Behind the scene if i have not class keyword.

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryption = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const usertwo = new User("tea", "tea@gmail.com", "anugraha@")
console.log(usertwo.encryption())
console.log(usertwo)
console.log(usertwo.changeUsername())