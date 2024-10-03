let a = function(){
    console.log("Hello world")
}
a();
console.log(typeof a) //function

function myfun(a, b){
    return a + b;
}
console.log(myfun(2,2))
console.log(typeof myfun) //function
console.log(typeof myfun()) //number
