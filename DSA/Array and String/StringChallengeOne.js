// Reverse string
const stringdata = strdata => strdata.split("").reverse().join("");
console.log(stringdata("anugraha"))  //output: aharguna

//Palindrom Challenge: agadi ra paxadi bada herda pni ustai dekhine Example : cddc = ulto garda pni cddc yasto type ko string lai palindrom vaninxa.
const palindromChallenge = str => str.split("").reverse().join("") == str;
console.log(palindromChallenge("Hello")); //output will be: false
console.log(palindromChallenge("cddc")) //true

