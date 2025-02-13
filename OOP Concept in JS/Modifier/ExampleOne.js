//private -> public -> protected
function Myclass(publicField, privateField, protectedField){
    //public field
    this.publicField = publicField

    //private field (closure)
    const _privateField = privateField

    //protected field
    const _protectedField = protectedField

    this.publicMethod = function(){
        return `public method: ${this.publicField}`
    }
   function _privateMethod(){
    return `Private method: ${_privateField}`
   }
   function _protectedMethod(){
    return `Protected method: ${_protectedField}`
   }
    this.accessProtectedMethod = function(){
        return _protectedMethod()
    }
}
const myObject = new Myclass("public data", "private data", "protected data")
// console.log(myObject.publicField)
// console.log(myObject._privateField)
// console.log(myObject._protectedField)

console.log(myObject.publicMethod())
// console.log(myObject._privateMethod())
// console.log(myObject._protectedMethod())
console.log(myObject.accessProtectedMethod())