/* Anonymous function: Anonymous function is a function that doesn't have a name identifier.*/
// Anonymous function assigned to a variable
const greet = function() {
    console.log("Hello! I am Anonymous function");
  };
  
  greet(); // Output: Hello!

//Example Two
const numbers = [1, 2, 3];
const squared = numbers.map(function(num) {
  return num * num;
});
console.log(squared); // Output: [1, 4, 9]

//Example Three : IIFE (Immediately Invoked function expression)
(function() {
    console.log("This function runs immediately!");
  })(); // Output: This function runs immediately!
  
//Arrow function
const double = (num) => num * 2;
console.log(double(5)); // Output: 10

/* Advantages of Anonymous function
- short and concise
-readability
-self contained for creating closures in IIFEs.
*/
