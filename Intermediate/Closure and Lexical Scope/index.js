//Closure: funnction bundling inside the function.
function outer(){
    let username = "anugraha tamang"
    function inner(){
        console.log("inner", username)
    }
    inner()
}
outer()


function myfun(name, detail){
    console.log(`My name is ${name}`);
    detail();
}
const one = function detail(){
    console.log("Hello sir");
}
myfun("anugraha", one)
