const symbol1 = Symbol("one")
const symbol2 = Symbol("two")
console.log(symbol1)
console.log(symbol2)

let sym = Symbol()
console.log(sym)
console.log(typeof sym)

const obj = {}
obj[Symbol("1")] = "Hello Nepal"
console.log(obj)
/* Output: 
Symbol(one)
Symbol(two)
Symbol()
symbol
{ [Symbol(1)]: 'Hello Nepal' } */