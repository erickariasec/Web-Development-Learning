let num = 3;

let numInString = "Unknown value";

switch (num) {
    case 1:
        numInString = "Number one";
        break;
    case 2:
        numInString = "Number two";
        break;
    case 3:
        numInString = "Number three";
        break;
    case 4:
        numInString = "Number four";
        break;
    default:
        numInString = "Number not Found";
        break;
}

console.log(numInString);