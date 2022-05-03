// Function Declaration
function myFunction(a, b) {
    console.log(arguments.length); // ! Return the number of arguments
    return a + b;
}

// Call function
let result = myFunction(2, 3);
console.log(result);

// Expression Function Declaration
let sumar = function (a, b) {
    return a + b;
};

// Call Expression Function
result = sumar(1, 2);
console.log(result);

// Self Invoking Function
(function (a, b) {
    console.log("Executing the function: " + (a + b));
})(3, 4);

console.log(typeof myFunction);

var myFunctionText = myFunction.toString();
console.log(myFunctionText);