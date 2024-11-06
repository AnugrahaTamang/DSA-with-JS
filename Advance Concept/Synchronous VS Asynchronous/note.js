/* Synchronous and Asynchronous is one of the most important part of js.
A. Synchronous: Tasks execute one after another. Blocks further execution until completed. slower for long running tasks.
Simple Sequetial logic. Single Thread.
B. Asynchronous: Tasks can start before others finish. Non-blocking, allow multitasking. faster, optimized for long tasks. Api requests, timers, file I/O.
*/

//Example of Synchronous 
function myfun(){
    console.log("Hello I am Anugraha Tamang")
}
console.log("Hello sir How are you");
myfun();

//Example of asynchronous 
setTimeout(() => {
    const greet = () =>{
        return 'I am from settimeout asynchronous function'
    }
    console.log(greet())
}, 4000);
//promise, async, await, settimeout, setinterval

