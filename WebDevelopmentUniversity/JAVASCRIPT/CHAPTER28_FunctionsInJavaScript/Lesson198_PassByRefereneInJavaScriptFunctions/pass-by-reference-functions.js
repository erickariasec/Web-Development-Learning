// Primitive Types
let x = 10;

function changeValue(a) {
  a = 20;
}

// ! Pass by value
changeValue(x);
console.log(x);
//console.log(a);

// * Object
const person = {
    firstName: 'Juan',
    lastName: 'Perez'
}

function changeObjectValue(p1) {
    p1.firstName = 'Carlos';
    p1.lastName = 'Lara';
}

// ! Pass by reference
changeObjectValue(person);
console.log(person);
