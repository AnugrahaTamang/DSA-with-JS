// 1. convert number to string 
const numValue = num => num.toString();
console.log(numValue(1234));

/* Convert number to string,covert string to array, reverse the string, convert array back to string
covert string to number return the number*/
const ConverNum = num => {
    const reverseString = num.toString().split("").reverse().join("");
    return parseInt(reverseString)
}
console.log(ConverNum(1231234))