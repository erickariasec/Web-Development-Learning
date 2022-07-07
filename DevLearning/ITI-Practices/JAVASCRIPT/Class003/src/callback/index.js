// Array Manipulation

// push, pop, shift, unshift
// ? filter, find, flat, jain, concat

const career = [
    { name: "Redes", horas: 800, practicas: 140 },
    { name: "Aplicaciones", horas: 900, practicas: 240 },
];

const newArray = [];
for (let i = 0; i < career.length; i++) {
    const element = career[i];
    newArray.push(element.name);
}
console.log(newArray);


const newArray2 = career.map((i) => i.name);
console.log(newArray2);


career.forEach(myNewArray);
function myNewArray(career) {
    console.log(career.name)
}


// Mutable and immutable

const newCareer = career;

newCareer[0].name = "Turismo";

console.log(newCareer);
console.log(career);


// Heap memory
// Stack memory
let num = 1; // stack memory
let num1 = 2; // stack memory


// Objects are in heap memory (random saves)
