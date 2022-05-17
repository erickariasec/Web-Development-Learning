myFunction2();
myFunction1();

function myFunction1() {
  console.log("This is my function 1");
}

function myFunction2() {
  console.log("This is my function 2");
}

// Callback Function 
function printData(message) {
    console.log(message);
}

function sum(num1, num2, functionCallback) {
    let result = num1 + num2;
    functionCallback(`Result: ${result}`);
}

// ! It is recommendable to use the same name function
// function sum(num1, num2, printData) {
//     let result = num1 + num2;
//     printData(`Result: ${result}`);
// }

sum(5,3, printData);


// ! Asynchronous calls with use of the setTimeOut Function
function myFunctionCallback() {
    console.log("Asynchronous greeting after 3 seconds");
}

setTimeout(myFunctionCallback, 3000); // after 3 seconds (3000 milliseconds)

setTimeout(function() {console.log("Asynchronous greeting 2 after 4 seconds")}, 4000);

setTimeout(() => console.log("Asynchronous greeting 3 after 5 seconds"), 5000);