let ageInString = "17"

//console.log(typeof myAgeInString);

let ageInNumber = Number(ageInString);
//console.log(typeof ageInNumber);

if (ageInNumber >= 18) {
    console.log("This person can vote");
} else {
    console.log("Too young to vote");
}

// Ternary Operator
let result = (ageInNumber >= 18) ? "This person can vote" : "Too young to vote";
console.log(result);