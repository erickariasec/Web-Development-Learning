let ageInString = "18x";

let ageInNumber = Number(ageInString);
console.log(ageInNumber); // NaN (Not a Number)

if (isNaN(ageInNumber)){ // NaN (Not a Number)
  console.log("It's Not a Number");
} else {
    if (ageInNumber >= 18) {
      console.log("This person can vote");
    } else {
      console.log("Too young to vote");
    }
}

// Ternary Operator
if (isNaN(ageInNumber)) {
    console.log("It is not a number");
} else {
    let result = ageInNumber >= 18 ? "This person can vote" : "Too young to vote";
    console.log(result);
}

