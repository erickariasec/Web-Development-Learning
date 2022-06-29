// ! Hoisting: EcmaSript <= 5
// Cuando las variables y functiones se declaran antes que se procese cualquier tipo de codigo var, function

myNumber = undefined;
console.log(myNumber);
var myNumber = 10;

var greeting = "Juan";

function hey() {
    return `Hello ${greeting}`;
}

console.log(hey());