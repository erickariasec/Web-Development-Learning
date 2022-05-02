beginning:  // label (it is not recommendable to use)
for (let counter = 0; counter <= 10; counter++) {
    if (counter % 2 != 0) { // It counter is not an even number
        continue beginning; // Go to the next iteration
    }
    console.log(counter);
}