class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }
    push(item){
        this.data[this.length] = item;
        this.length ++ 
        return this.length;
    }
    get(index){
        return this.data[index];
    }
    
}
let myNewArray = new MyArray();
console.log(myNewArray)
//add the element into array
myNewArray.push("anugraha")
myNewArray.push("ramit")
myNewArray.push("Jeewan")
myNewArray.push("puja")
myNewArray.push("amisha")
console.log(myNewArray)
console.log(myNewArray.get(2)) 

