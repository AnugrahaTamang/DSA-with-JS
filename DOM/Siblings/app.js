/*
-siblings
-parentElement
- children
-nextElementSibling
-previousElementSibling

*/
const firsli = document.querySelector("li");
console.log(firsli) //Home

console.log(firsli.parentElement)//ul
console.log(firsli.parentElement.parentElement) //body
console.log(firsli.parentElement.parentElement.parentElement)//html
console.log(firsli.parentElement.parentElement.parentElement.parentElement) //null

const ul = document.querySelector("ul");
console.log(ul)
console.log(ul.children) 
console.log(ul.children[2].textContent) //project
console.log(ul.children[2].textContent = "apple");

console.log(firsli.nextElementSibling)//contact
console.log(firsli.nextElementSibling.nextElementSibling.textContent)//apple
console.log(firsli.nextElementSibling.nextElementSibling.nextElementSibling.textContent)//about

const a = document.querySelector('a');
console.log(a)
console.log(a.previousElementSibling)//li
console.log(a.previousElementSibling.previousElementSibling) //li
console.log(a.previousElementSibling.previousElementSibling.previousElementSibling)//li
console.log(a.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling)//li
console.log(a.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling) //null





