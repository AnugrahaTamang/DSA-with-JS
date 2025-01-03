// Data Structure: A data structure and algorithm is specific way to organizing, storing and accessing the data. 
const name = ["ramit", "jeewan", "amisha", "bijay", "yuhana"]

/* Algorithm: A set of instructions that tells a computer how to do something, 
or you can also say step by step solution of the problem is called the algorithm. */
function findname(name){
    for(let i = 0; i<=name.length; i++){ //algorithm
        if (name=="ramit"){
            console.log("found", name)
            break;
        }
    }
}
findname("ramit")