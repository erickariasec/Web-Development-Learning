let a = 3, b = 2, c = "3";

let z = a != c; // The value is checked regardless of the type
console.log(z);

z = a !== c; // The value is checked but also the type (strict different from operator)
console.log(z);