"use strict";
let result = -1;

try {
    // x = 10;
    if (isNaN(result)) {
        throw "It is not a number";
    } else if (result === "") {
        throw "It is an empty string";
    } else if (result >= 0) {
        throw "Positive Value";
    } else if (result <= 0) {
        throw "Negative Value";
    }
} catch(error) {
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
} finally {
    console.log("Finish errors review");
}