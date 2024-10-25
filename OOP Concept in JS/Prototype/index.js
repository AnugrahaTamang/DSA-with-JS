/* The Object.create() method creates a new object, using aan existing object as the 
prototype of the newly created object.
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



