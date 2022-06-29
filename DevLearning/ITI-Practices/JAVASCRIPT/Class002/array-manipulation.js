// ! array[] +push() -pop() +unshift() -shift() indexof

const fruits = ["banana", "manzana", "pera", "fresa"]; // declaration and assignment
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log(`Original Fruits: `, fruits);

// Push: Add element at the end of the array
fruits.push("uva");
console.log(`Added Fruits at the end: `, fruits);


// Pop: Remove element at the end of the array
fruits.pop();
console.log(`Removed Fruits at the end: `, fruits);


// Shift: Remove element at the beginning of the array
fruits.shift();
console.log(`Removed Fruits at the beginning: `, fruits);


// Unshift: Add element at the beginning of the array
fruits.unshift("naranja");
console.log(`Added Fruits at the beginning: `, fruits);




const num3 = 3.41;
console.log(typeof num3); // Floats are number type in JavaScript



// My Example
const myArray = [
    ["Erick Arias", 23, "man"],
    ["Ronald Arias", 29, "man"],
    ["Veronica Contreras", 30, "woman"],
];

console.log(myArray);

// Adding two elements at the end of the array
myArray.push(["Santiago Vivanco", 23, "man"], ["Carla Vivanco", 25, "woman"]);

console.log(myArray);

// Deleting the last element of the array
myArray.pop();

console.log(myArray);

// Adding two elements at the beginning of the array
myArray.unshift(["Diana Sanchez", 27, "woman"], ["Alexis Sanchez", 20, "man"]);

console.log(myArray);

// Deleting the first element of the array
myArray.shift();

console.log(myArray);