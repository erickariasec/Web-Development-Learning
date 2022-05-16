let myFunction = function() {
    console.log("Greetings from my function");
}

// const myArrowFunction = () => {
//     console.log("Greeting form my arrow function");
// }

// const myArrowFunction = () => console.log("Greeting from my arrow function"); // ! Another way to declare arrow functions

// myArrowFunction();

// const greeting = () => {
//     return "Greetings from my arrow function"
// }

const greeting = () => "Greetings from my arrow function";

console.log(greeting());

const returnObject = () => ({personName: "Juan", lastName: "Lara"});
console.log(returnObject());

const classicFunctionWithParameters = function(message) {
    console.log(message);
}

// const functionWithParameters = (message) => console.log(message);
const functionWithParameters = message => console.log(message);
functionWithParameters("Greetings with Parameters");

// const functionWithSomeParameters = (num1, num2) => num1 + num2;
const functionWithSomeParameters = (num1, num2) => {
    let result = num1 + num2;
    // return result;
    return `Result: ${result}`;
}
console.log(functionWithSomeParameters(3, 5));