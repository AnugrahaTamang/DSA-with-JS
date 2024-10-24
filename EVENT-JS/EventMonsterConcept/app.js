/* Note: This is the important concept about the Event Propogation.
There are two type of Event propogation.
Number 1. Event Bubbling (default event) : Event bubbling is inside to outside (bottom to top)
Number 2. Event Capturing : outside to inside (top to bottom)
Some important concept with event propogation.
-stoppropogation() method : used to stop the event propogation.
-preventDefault() methdo : used to stop default behaviour. it's used to form and anchor tag specially.
 */

// Example of Event Bubbling propogation
// const image = document.querySelector(".Images");
// image.addEventListener("click", (e)=>{
//     console.log("clicked inside the ul");
// }, false) //false is optional by default it is false.

// const two = document.querySelector(".two");
// two.addEventListener("click", (e)=>{
//     console.log("clicked the image two");
//     e.stopPropagation();
// }, false)

// Example of Event Capturing propogation
const image = document.querySelector(".Images");
// image.addEventListener("click", (e)=>{
//     console.log("clicked inside the ul");
// }, true) //false is optional by default it is false.

// const two = document.querySelector(".two");
// two.addEventListener("click", (e)=>{
//     console.log("clicked the image two");
//     e.stopPropagation()
// }, true)

// const a = document.querySelector("a");
// a.addEventListener("click", function(e){
//     e.preventDefault();
// })

// image.addEventListener("click", function(e){
//     if(e.target.tagName == "IMG"){
//      const tagname = e.target.parentElement;
//      tagname.remove()
//     }   
// })


const ul = document.querySelector("ul");
ul.addEventListener("click", function(e){
    console.log(e);
    console.log(e.srcElement)
    console.log(e.screenX)
    console.log(e.screenY)
    console.log(e.clientX)
    console.log(e.clientY)
})
