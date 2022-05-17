let clock = () => {
    let date = new Date();
    console.log(`${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`);
}

setInterval(clock, 1000); // Call clock every second