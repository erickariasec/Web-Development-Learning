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










// Asynchronism

function sum(num1, num2) {
    return num1 + num2;
}

function call(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(call(5, 10, sum));


// setTimeout


console.log(1);
setTimeout(() => {
    console.log(2);
    console.log(3);
}, 0);

console.log(4);


// Herencia
// Abstracción
// Encapsulamiento
// Polimorfismo

class Personas {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    
    openName() {
        console.log(`My name is ${this.name}`);
    }
}

const person1 = new Personas("Erick", 23, "erick.arias@iti.edu.ec");
const person2 = new Personas("Cristian", 27, "crist2306@hub.com");

person1.openName();
person2.openName();