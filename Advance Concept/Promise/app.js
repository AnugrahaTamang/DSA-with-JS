//Promise
//-Creating a promise
const promiseone = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async task is complete");
        resolve(); //It's connect with then. resolve and then is neccessary to connect for promise.
    },1000)
})
promiseone.then(function(){
    console.log("promise consumed");
})


//another promise create method
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve();
    },2000)
}).then(function(){
    console.log("Async two resolve");
})

//promise three creation
const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: "Anugraha Tamang", age: 22}) //object passed in resolve parameter
    },1000)
})
promisethree.then(function(userdetail){
    console.log(userdetail);
})

//Usecase of reject
const promisefour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false; //you can put true
        if(!error){
            resolve({name: "anugraha tamang", age: 22});
        }else{
            reject("Something is error");
        }
    }, 1000);
});
promisefour.then(function(user){
    console.log(user);
    return user.name;
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log("This is the ", error)
})
.finally(function(){
    console.log("This is the finally print.")
}) //chahe resolve ya reject hos yo chai print hunxa nai.

//promisefive
/*const promisefive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false; //you can put true
        if(!error){
            resolve({name: "anugraha tamang", age: 22});
        }else{
            reject("Something is error");
        }
    }, 1000);
})
async function promisefive(){
    // await promisefive() //you can't access like it due to promise is Object.
    const response = await promisefive;
    console.log(response);
} */

// Note: you can't handle the Error from async and await.
const promisefive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false; //you can put true
        if(!error){
            resolve({name: "anugraha tamang", age: 22});
        }else{
            reject("Something is error");
        }
    }, 1000);
})

async function consumePromise(){
    try{
        const response = await promisefive
        console.log(response);
    }
    catch(error){
        console.log("I found the ", error);
    }
}
consumePromise();

const data = fetch('https://api.github.com/users/AnugrahaTamang')
data.then(function(data){
    return data.json();
})
.then(function(alldata){
    console.log(alldata)
})
.catch(function(error){
    console.log(error);
})