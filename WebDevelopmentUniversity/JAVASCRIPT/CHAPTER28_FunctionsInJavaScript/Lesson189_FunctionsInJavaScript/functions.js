// ! Hoisting: We can define our function anywhere in our program, and we can call it before defining it or after defining it. What hoisting does is move the function declaration to the top of our program, so we can use it anywhere in our file/program.

// Call function before function declaration
myFunction(4, 2);

// Function Declaration
function myFunction(a , b) {
    console.log("Suma: " + (a+b));
}

// Call function after function declaration
myFunction(2, 3);

