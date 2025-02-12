<h1>Prototype:</h1>
<p>Every object in javascript has built in property which is called its prototype.</p>
<li> Every javascript object has a anonymous property called prototype. remember functions and array
are also a object that prototype will be the parent of that object, prototype property is object by 
itself which have some special properties and methods</li>
<li>In javascript every object is associated with another object. The object a is associated with [[prototype]] object which means a object will inherit all properties of Object.prototype.</li>


<h1>Prototype inheritance</h1>
<p>Prototype inheritance is a mechanism in javascript that allows objects to inherit properties and methods from other objects. It is a fundamental concept in the language and is based on the prototype model. In prototypal inheritance, objects can serve as prototypes for other objects, forming a hierarchical chain of inheritance.</p>
<p>In javascript every object has an internal property called prototype. often refer to as __proto__, which points to its that property or method is not found in the object itself, javascript looks for it in the object's prototype and further up the prototype chain if needed until it finds the property or reaches the top of the prototype chain which is usually the Object.Prototype.</p>