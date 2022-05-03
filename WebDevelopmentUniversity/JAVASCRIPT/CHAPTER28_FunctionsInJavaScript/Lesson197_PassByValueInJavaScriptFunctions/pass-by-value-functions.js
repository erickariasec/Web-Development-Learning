// Primitive Types
let x = 10;

function changeValue(a) {
    a = 20;
}

// Pass by value
changeValue(x);
console.log(x);
console.log(a);