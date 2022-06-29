// ! Coerción Implícita y explícita
console.log(4 + "7");
console.log(4 * "7");

let anotherNumber = "7";
console.log(typeof anotherNumber);
let convertNumber = Number(anotherNumber);
console.log(typeof convertNumber);
let convertNumberToString = String(convertNumber);
console.log(typeof convertNumberToString);

let numberExample = "1";
console.log(Number(numberExample));

let numberExample2 = "2";
console.log(parseInt(numberExample2));

let numberExample3 = 1.1;
console.log(parseInt(numberExample3));