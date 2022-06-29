// ! Switch
const num = 1;

switch (num) {
    case 1:
        console.log(`eres el valor numero ${num}`);
        break;
    case 2:
        console.log(`eres el valor numero ${num}`);
        break;
    case 3:
        console.log(`eres el valor numero ${num}`);
        break;
}



function caseInSwitch(val) {
    let answer = "";
 
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    
    return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));