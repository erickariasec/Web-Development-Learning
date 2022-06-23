// Scope global and local
var firstName = "Erick";
let myFunction = () => {
    var localOne = "Manuel";
    return console.log(firstName);
}
myFunction();
//console.log(localOne); // It is not possible because this is a local variable from myFunction()

// ! Consultar Block scope (let & const) and Function scope

// Hoisting: EcmaSript <= 5
// Cuando las variables y functiones se declaran antes que se procese cualquier tipo de codigo var, function

myNumber = undefined;
console.log(myNumber);
var myNumber = 10;


var greeting = "Juan";

function hey() {
    return `Hello ${greeting}`;
}

console.log(hey());


// Coerción Implícita y explícita
console.log(4 + "7");
console.log(4 * "7");

let anotherNumber = "7";
console.log(typeof anotherNumber);
let convertNumber = Number(anotherNumber);
console.log(typeof convertNumber);
let convertNumberToString = String(convertNumber);
console.log(typeof convertNumberToString);

let numberExample = "1";
console.log(Number(numberExample));

let numberExample2 = "2";
console.log(parseInt(numberExample2));

let numberExample3 = 1.1;
console.log(parseInt(numberExample3));


// True and False: Boolean()
// FALSE
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));

// TRUE
console.log(Boolean(" "));
console.log(Boolean(1));
console.log(Boolean(5));
console.log(Boolean(true));
console.log(Boolean([]));
console.log(Boolean({}));


// Assignation Operator, Arithmetics, Comparator, Logic

// Arithmetics
console.log(5 + 2);
console.log(3 * 2);
console.log(2 - 1);
console.log(5 / 2);
console.log(5 % 3); // Residuo / Modulus
console.log(5 ** 2); // Potencia

// Assignation
// !false
var list = [];
// +=
// *=


// Comparator
// ==
// ===


// Logic
// && AND
// || OR



// Conditionals IF, ELSE, ? true : false

let decision = true;

if (decision) {
    console.log("You lose");
} else {
    console.log("You lose");
}

// Ternary Operator
let total = 5 > 7 ? "This is true" : "This is false";
console.log(total);



// Switch

// array[] +push() -pop() +unshift() -shift() indexof

// Loops and while

// Objects