/*try, catch, finally and throw */

try{
    console.lag("Hello sathi")
}
catch(Error){
console.log(Error);
}
finally{
    console.log("Hello Anugraha Tamang")
}

try{
const num = Number(window.prompt("Enter your first Number: "));
const num2 = Number(window.prompt("Enter your number two: "));
if(num2 == 0){
    throw new Error("You can't divide by zero!");
}
if(isNaN(num) || isNaN(num2)){
    throw new Error("please Enter the Number")
}
const result = num/num2;
console.log(result)
}
catch(error){
    console.log(error)
}
