const one = document.querySelector(".click");
const two = document.querySelector(".dblclick")
const three = document.querySelector(".mousedown")
const four = document.querySelector(".mouseenter")
const five = document.querySelector(".mouseleave")
const six = document.querySelector(".mouseover")
const seven = document.querySelector(".mousemove")
const eight = document.querySelector(".mouseout")
const nine = document.querySelector(".mouseup")
const ten = document.querySelector(".contextmenu")

one.addEventListener("click", ()=>{
    one.classList.toggle("one");
});

two.addEventListener("dblclick", ()=>{
two.classList.toggle("two");
})

three.addEventListener("mousedown", ()=>{
    three.classList.toggle("three");
})

four.addEventListener("mouseenter", ()=>{
    four.classList.toggle("four");
})

five.addEventListener("mouseleave", ()=>{
    five.classList.toggle("five")
})
six.addEventListener("mouseover", () =>{
    six.classList.toggle("six")
})
seven.addEventListener("mousemove", ()=>{
    seven.classList.toggle("seven")
})
eight.addEventListener("mouseout", ()=>{
    eight.classList.toggle("eight")
})

nine.addEventListener("mouseup", ()=>{
    nine.classList.toggle("nine")
})

ten.addEventListener("contextmenu", ()=>{
    ten.classList.toggle("ten")
})