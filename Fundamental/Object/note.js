//Object is fundamental data structure that enable the organization and storage of data in the form of key value pairs.
//Objects are unordered collection of key value pairs. These key value pairs known as properties.

//Single tone
const obj = new Object();
obj.name = "ramit";
obj.age = 22;
obj.greet = () => {
  return `I am from choke`;
};
console.log(obj);
console.log(obj.greet());

//Object Literals
const OBJ = {
  name: "jeewan",
  age: 22,
  location: "kathmandu",
  greet: function () {
    return `Hello sathi`;
  },
};
console.log(OBJ);
console.log(OBJ["location"]);
console.log(OBJ.greet());

//Freeze the objects
Object.freeze(OBJ);
console.log(OBJ.name);
OBJ.lname = "tamang"; //no push due to freeze
delete OBJ.location; //no delete due to freeze
console.log(OBJ);

//Delete the object property
const detail = {
  name: "ragab",
  age: 33,
  location: "Kathmandu",
};
console.log(detail);
delete detail.name;
console.log(detail);
console.log(detail.name); //undefined

//Clone the object
let clonedetail = Object.assign({}, detail);
console.log(clonedetail);
clonedetail = Object.assign({}, obj, OBJ, detail);
console.log(clonedetail);

//Symbol in object
const mysym = Symbol("mykey");
const datasym = {
  name: "rama",
  age: 22,
  [mysym]: "kg",
  location: "kathmandu",
};
console.log(datasym);
console.log(datasym[mysym]);
console.log(typeof datasym[mysym]);
console.log(typeof datasym.age);

//Important
//Object Convert to Array
const store = {
  one: {
    name: "ramit",
    age: 22,
    location: "kathmandu",
  },
  two: {
    name: "jeewan",
    age: 33,
    location: "dhading",
  },
};
console.log(store);
console.log(store.hasOwnProperty("one"));
console.log(Object.keys(store));
console.log(Object.values(store));
//This is imp
console.log(Object.entries(store)); //Convert obj to array
