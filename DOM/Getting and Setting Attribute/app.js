//a
//a.href
//input
//input.value
//input.type
const a = document.querySelector("a");
console.log(a);
//access the attribute 
console.log(a.href)
// set the attribute
console.log(a.href = "https:www.google.com")

//getting attribute
const input = document.querySelector("input");
console.log(input.type);
console.log(input.id)
console.log(input.getAttribute("type"));

//Setting attribute
console.log(input.setAttribute("placeholder", "Enter name"));

console.log(input.getAttribute("placeholder"));
console.log(input.placeholder);