//operator is operation of operand. 
//Number 1. Arithmetic operator
console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2*2);
console.log(3%2);

//Number 2. Assignment operator
let a = 2;
console.log(a+=4);
console.log(a-=4);
console.log(a%=4);
console.log(a/=4);
console.log(a*=4);

//Number 3. Conditional operator
console.log(3>2);
console.log(3<2);
console.log(3>=2);
console.log(3<=2);
console.log(2==2)
console.log(2===2)

//Number 4.Increment and Decrement operator
let x = 3;
 console.log(x++) //3 postIncrement don't increase that time.
 console.log(x) //4
console.log(++x) //5 preincrement increase that time.
console.log(x--) //5 postdecrement
console.log(x) //4
console.log(--x)//x predecrement
console.log(x) //3

// Number 5. Bitwise operator
console.log(2&2); //2
console.log(3&2) //2
console.log(4&2) //0
console.log(3|3) //3
console.log(4|2); //6
console.log(7|2) //7
console.log(2^3) //1
console.log(7^2) //5
console.log(2**2)
console.log(~3)
console.log(~-2)
console.log(~-0)
console.log(~0)
console.log(~-1)
console.log(7>>1);
console.log(4>>>1)

//Number 6. logical operator
if (3>2 && 2<4){
    console.log("Hello Hiro")
}
else{
    console.log("Hello zero")
}

if(3>2 || 4<2){
    console.log("I am here")
}else{
    console.log("I am there")
}

if(2!=3){
    console.log("not equal")
}else{
    console.log("Equal")
}

//Number 7. Rest operator in js
//It's used to take multiple input parameter. Example:
function myfun(name, ...data){
    console.log(name);
    console.log(data)
}
myfun("anugraha tamang","ramit tamang","jeewan tamang","bijay tamang")

//Number 8. Spread Operator in js
//Note: It's used to clone and concatination of object and array.Example:
let arr = [12,23]
let aar = [23,35]
console.log(...aar,...aar)

let obj ={
    name: "anugraha tamng",
    age:33
}
let obj3 = {...obj}
console.log(obj3)



