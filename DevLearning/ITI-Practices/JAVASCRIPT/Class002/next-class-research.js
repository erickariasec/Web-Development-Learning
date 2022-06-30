// !Array Manipulation: Map, filter, some, forEach, Find, findIndex


// Array.map() method:  creates a new array from the results of calling a function for every element.

const numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt));


const otherNumbers = [65, 44, 12, 4];
console.log(otherNumbers.map(multiplyNumberBy10));

function multiplyNumberBy10(num) {
    return num * 10;
}


// Array.filter() method: creates a new array filled with elements that pass a test provided by a function.

const ages = [25, 33, 16, 50, 12, 18];
console.log(ages.filter(checkAdult));

function checkAdult(age) {
    return age >= 18;
}