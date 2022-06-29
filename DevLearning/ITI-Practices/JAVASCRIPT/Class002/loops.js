// !Loops

const fruitsLoop = ["banana", "manzana", "pera", "fresa"];

// for loop
for (let i = 0; i < fruitsLoop.length; i++) {
    let el = fruitsLoop[i];
    debugger;
    console.log(`The fruit ${i + 1} is `, el);
    // console.log(fruitsLoop[i]);
}


// for of loop
for (let fr of fruitsLoop) {
    console.log(`The fruit is `, fr);
}


// for in loop
for (let fr in fruitsLoop) {
    console.log(`The fruit is the position `, fr);
}


const fruitsLoop2 = ["banana", "manzana", "pera", "fresa"];
let i = 0;

// while loop
while (i < fruitsLoop2.length) {
    console.log(fruitsLoop2[i]);
    i++;
}