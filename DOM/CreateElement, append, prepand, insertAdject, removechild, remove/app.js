//CreateElement()
// appendChild()
// append()
//prepand()
// removeChild()
// remove()
//replacewith
//outerHTML

// insertBefore(what, where)
/* insertAdjacentElement(
  beforebegin,
  beforeend,
  afterend,
  agterbegin
)
  */

const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.textContent = "Hello Everyone";

//appendchild method
console.log(body.prepend(h1))

//Now i am creating a form
const form = document.createElement("form");
console.log(body.append(form))

const label = document.createElement('label');
label.id = "Name";
label.textContent = "Enter your Name: ";
const input = document.createElement("input");
input.type = "text";
input.for = "Name";
input.placeholder = "Enter your name";
console.log(form.appendChild(label));
console.log(form.appendChild(input));

console.log(label.getAttribute("id"));
console.log(input.getAttribute("type"));

 const i = document.createElement('i');
 i.textContent = "I am here";
 i.style.backgroundColor = "black";
 i.style.color = "red";
 const ul = document.querySelector("ul");
 ul.insertAdjacentElement("beforebegin", i)
 ul.insertAdjacentElement("beforeend", i)
 ul.insertAdjacentElement("afterbegin", i)
 ul.insertAdjacentElement("afterend", i);

 console.log(ul.children.length)

 console.log(ul.children[2].textContent)
 console.log(ul.children[2].textContent = "Project")//it's not a good idea

 
// Edit 
const newul = document.createElement('ul');
console.log(body.append(newul));

function addlang(langname){
  const newli = document.createElement('li');
  newli.textContent = `${langname}`;
  console.log(newul.appendChild(newli));
}
addlang("Python");
addlang("js")
addlang("oop")
addlang("react")

console.log(newul.children.length);

//optimize way
function myfun(addname){
  const newli = document.createElement('newli');
  newli.appendChild(document.createTextNode(addname));
  console.log(newul.append(newli))
}
myfun("laravel");

//Edit
const secondlang = document.querySelector('Li:nth-child(2');
console.log(secondlang)
const linewone = document.createElement("li");
linewone.innerHTML = "Contact Me";
console.log(secondlang.replaceWith(linewone))

const thirdlang = document.querySelector('Li:nth-child(3)');
console.log(thirdlang)
console.log(thirdlang.remove())