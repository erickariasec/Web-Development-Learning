// ? RESEARCH: Array Manipulation: Map, filter, some, forEach, Find, findIndex


// ! Array.map() method:  creates a new array from the results of calling a function for every element.

const numbers = [4, 9, 16, 25];
console.log(numbers.map(Math.sqrt));


const otherNumbers = [65, 44, 12, 4];
console.log(otherNumbers.map(multiplyNumberBy10));

function multiplyNumberBy10(num) {
    return num * 10;
}


// ! Array.filter() method: creates a new array filled with elements that pass a test provided by a function.

const ages = [25, 33, 16, 50, 12, 18];
console.log(ages.filter(checkAdult));

function checkAdult(age) {
    return age >= 18;
}


// ! Array.some() method: checks if any of the elements in an array pass a test (provided as a function).
// The some() method returns true (and stops) if the function returns true for one of the array elements.
// The some() method returns false if the function returns false for all of the array elements.

const otherAges = [3, 10, 18, 27, 5, 50];
console.log(otherAges.some(checkOtherAdults));

function checkOtherAdults(age) {
    return age >= 18;
}


// ! Array.forEach() method: calls a function for each element in an array.

const students = ["John", "Sara", "Jack"];

students.forEach(myFunction);

function myFunction(item) {
    console.log(item);
}


// ! Array.find() method: returns the value of the first element that passes a test.
// The find() method returns undefined if no elements are found.

const newAges = [30, 59, 15, 22, 3, 94];
console.log(newAges.find(checkFirstKidAge));

function checkFirstKidAge(age) {
    return age <= 18;
}


// ! Array.findIndex() method: returns the index (position) of the first element that passes a test.
// The findIndex() method returns -1 if no match is found.

const otherNewAges = [3, 10, 18, 27, 5, 50];
console.log(otherNewAges.findIndex(checkFirstAdultAndReturnIndexPosition));

function checkFirstAdultAndReturnIndexPosition(age) {
    return age >= 18;
}