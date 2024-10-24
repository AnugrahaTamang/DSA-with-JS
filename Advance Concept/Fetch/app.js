/*The global fetch() method starts the process of fetching a 
resource from the network, returning a promise which is fulfilled
once the response is available. */
fetch('https://api.github.com/users/AnugrahaTamang')
.then(function(data){
    return data.json();
})
.then(function(data){
    console.log(data.name)
    console.log(data.location)
})
.catch(function(error){
    console.log("Found the",error);
})


//async and await
async function ConsumePromise(){
    try{
        const response = await fetch('https://api.github.com/users/AnugrahaTamang')
        const data = await response.json() //it take the time so please include the await
        console.log(data.name);
        console.log(data.location)
        console.log(data.followers)
    }
    catch(error){
        console.log("found the error")
    }
}
ConsumePromise();