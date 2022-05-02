let dayHour = 17;
let message;

if (dayHour >= 6 && dayHour <= 11) {
    message = "Good morning";
} else if (dayHour >= 12 && dayHour <= 18) {
    message = "Good afternoon";
} else if (dayHour >= 19 && dayHour <= 24) {
    message = "Good evening";
} else if (dayHour >= 0 && dayHour < 6) {
    message = "Sleeping"
} else {
    message = "Invalid Value"
}

console.log(message);