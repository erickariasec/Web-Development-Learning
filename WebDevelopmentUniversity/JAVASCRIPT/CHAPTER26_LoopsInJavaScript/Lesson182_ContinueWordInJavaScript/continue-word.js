for (let counter = 0; counter <= 10; counter++) {
    if (counter % 2 != 0) { // It counter is not an even number
        continue; // Go to the next iteration
    }
    console.log(counter);
}