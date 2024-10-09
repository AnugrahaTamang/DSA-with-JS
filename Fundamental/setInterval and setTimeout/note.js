//SetInterval and setTimeout is callback function .
// setInterval(() => {
//   console.log("Hello sir");
// }, 2000);
function myfun() {
  console.log("I am here");
}
setTimeout(() => {
  myfun();
  console.log("Hello");
}, 3000);

// setInterval(() => {
//   myfun();
//   console.log("Hello sir");
// }, 2000);

const invervalid = setInterval(() => {
  console.log("ehh");
}, 1000);
console.log(invervalid);

setTimeout(() => {
  clearInterval(invervalid);
  console.log("Hello");
}, 10000);
