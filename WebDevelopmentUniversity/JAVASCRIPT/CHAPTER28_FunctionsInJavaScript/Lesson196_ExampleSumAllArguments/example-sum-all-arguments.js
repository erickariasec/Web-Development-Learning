let sumResult = sumAllNumbers(5, 4, 13, 10, 9, 10, 11, 3);
console.log(sumResult);

function sumAllNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}