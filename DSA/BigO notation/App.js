/* BigO notation: BigO notation is all about the time and space complexity. 
BigO notation help us understand how long an algorithm will take to run or how much memory it will
need as the amount of data it handles grows */

// Types of BigO notation 

// O(n): it's also known as n + n = 2n o(2n) but we write the O(n). Example:
const name = ["ramit", "jeewan", "amisha", "bijay", "yuhana"];
function findName(item){
    for(let i = 0; i<name.length; i++){
        if (name[i] == item){
            console.log("found", item);
            break;
        }
    }
}
findName("ramit")


/* O(1): aka constant time, signifies that the execution time of an algorithm remains constant regardless
of the input size .  Example*/

const fruit = ["apple", "banana", "pineapple"];
function findFruit(arr, index){
    console.log(arr[index])
}
findFruit(fruit, 0) //output: apple

// O(n^2) : find to the pair data.  Example

function Heyfind(arr){
    for(let i = 0; i<= arr.length; i++){
        for (let j = 0; j<= arr.length; j++){
            console.log(`Print ${arr[i]} ${arr[j]}`);
        }
    }
}
const elementOne = [1,2,3,4,5];
Heyfind(elementOne)
