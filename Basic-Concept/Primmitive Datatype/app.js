//primmitive datatype is those data which size is fixed into memory location.
//It's also known as Stack memory. Example: Number,undefined,Bigint,Null,string
//Simple Example:
let a;
console.log(a) //undefined
console.log(typeof(a)) //undefined Note: It's size is 4 byte 

let b = null;
console.log(b) //Null
console.log(typeof b) //object Note: It's size is 4 byte

let str = "hello world";
console.log(str)
console.log(typeof str) //string Note: it's size is 2 byte

let bool = true;
console.log(typeof bool) //boolean Note: it's size is 1 bit.

let num = 1222;
console.log(typeof num) //number Note: it's size is 8 byte.