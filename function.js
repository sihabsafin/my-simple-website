//our first javascript File

function greet(name) {
    console.log("Hello, " + name + "!");
}
// Export the greet function so it can be used in other files
module.exports = greet;
// Example usage
// const greet = require('./function.js');
// greet('Alice'); // Output: Hello, Alice!
// greet('Bob');   // Output: Hello, Bob!
