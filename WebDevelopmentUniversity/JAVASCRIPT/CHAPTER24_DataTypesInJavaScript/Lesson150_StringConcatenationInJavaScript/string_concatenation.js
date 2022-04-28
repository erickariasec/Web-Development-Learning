var firstName = "Juan";
var lastName = "Altamirano";

var fullName = firstName + ' ' + lastName;
console.log(fullName);

var fullName2 = "Erick" + ' ' + "Arias";
console.log(fullName2);

// ! If there is a string first, the numbers become strings, so they are not added, they are only concatenated as characters.
var fullNameAge = fullName2 + ' ' + 2 + 2;
console.log(fullNameAge); // Erick Arias 22

// ! If there is a string first, the numbers become a string and you have to put the numbers in parentheses so that they add up.
var fullNameSumAge = fullName2 + ' ' + (10 + 12);
console.log(fullNameSumAge);

// ! If there is a sum first, add the numbers and then put the string
var sumAgefullName = 20 + 2 + ' ' +fullName2;
console.log(sumAgefullName);