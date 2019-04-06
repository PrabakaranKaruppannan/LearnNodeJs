// Example 1: Simple Console Message from Node Js
console.log("Hello World from Node Js");


// Example 2: Export and Import. Export from tutorial file and use it app file
const tutorial = require('./tutorial');

// Access the tutorial properties
console.log(tutorial);
console.log(tutorial.sum(2, 3));
console.log(tutorial.sum(3, 1));
console.log(tutorial.PI);