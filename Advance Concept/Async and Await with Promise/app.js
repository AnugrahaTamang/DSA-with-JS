const promiseone = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true; //you can false put here.
        if(!error){
            resolve({name: "anugraha", age: 22});
        }else{
            reject("Error find");
        }
    }, 1000);
});
async function promiseConsume(){
    try{
        const response = await promiseone  //These is the promise
        console.log(response)
    }catch(error){
        console.log("I found Here the ", error)
    }
}
promiseConsume();


//call api
// const gitApi = 'https://api.github.com/users/AnugrahaTamang'
async function ConsumePromise(){
    try {
        const response = await fetch('https://api.github.com/users/AnugrahaTamang')
        // const data =  await response.json();
        // console.log(data);
        console.log(response)
    } catch (error) {
        console.log("found ", error);
    }
}
ConsumePromise();
