let num = 1233;
let floatvalue = "12.22";
let intvalue = "100"
console.log(num)
console.log(typeof num) //Number
console.log(floatvalue)
console.log(typeof floatvalue) //string
console.log(intvalue)
console.log(typeof intvalue)

floatvalue = parseFloat(floatvalue);
console.log(typeof floatvalue)//number

intvalue = parseInt(intvalue);
console.log(typeof intvalue)//number