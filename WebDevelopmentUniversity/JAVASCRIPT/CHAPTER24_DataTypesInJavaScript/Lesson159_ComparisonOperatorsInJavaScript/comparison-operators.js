let a = 3, b = 2, c = '3';

let z = (a == c); // The value is checked regardless of the type
console.log(z);

z = (a === c); // The value is checked but also the type (strict equality operator)
console.log(z);

z = a == b;
console.log(z);