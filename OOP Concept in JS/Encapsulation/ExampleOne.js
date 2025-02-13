//In javascript we can achieve encapsulation by using closures to create private members.
function Counter(){
    let _count = 0; //private variable
    //public method that can access and modify the private variable
    this.increment = function(){
        _count++
    }
    this.decrement = function(){
        _count--
    }
    this.getCount = function(){
        return _count
    }
}

const myObject = new Counter()
console.log(myObject.getCount())
console.log(myObject.increment())
console.log(myObject.increment())
console.log(myObject.increment())
console.log(myObject.getCount())  //3
console.log(myObject.decrement())
console.log(myObject.decrement())
console.log(myObject.decrement())
console.log(myObject.decrement())
console.log(myObject.decrement())
console.log(myObject.getCount())