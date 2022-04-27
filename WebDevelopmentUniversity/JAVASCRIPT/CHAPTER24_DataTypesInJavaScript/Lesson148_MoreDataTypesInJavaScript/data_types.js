/* DATA TYPES IN JAVASCRIPT */

// string data type
var personName = "Erick";
console.log(typeof personName);

// numeric data type
var number = 1000;
console.log(typeof number);

// object data type
var object = {
    name : "Juan",
    lastName : "Perez",
    phoneNumber : "0987654321"
}
console.log(object);

// boolean data type (true, false)
var flag = true;
console.log(typeof flag);

// function data type
function myFunction() {

}
console.log(typeof myFunction);

// symbol data type
var mySymbol = Symbol("this is my symbol");
console.log(typeof mySymbol)

// class data type (class in JavaScript is also function)
class Person {
    constructor(personName, lastName){
        this.personName = personName;
        this.lastName = lastName;
    }
}
console.log(typeof Person);

// undefined data type
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x)

// null = lack (ausencia) of value
var y = null;
console.log(typeof y);