const btn = document.querySelector('#one');
btn.onclick = function(){
    alert("Hello sir How are you?");
} //Not a good method

//This is the good method
const btnone = document.querySelector(".btn");
btnone.addEventListener("click", ()=>{
    alert("I am here");
} )


const para = document.querySelector(".para");
para.addEventListener("click", (e)=>{
    console.log(e)
});