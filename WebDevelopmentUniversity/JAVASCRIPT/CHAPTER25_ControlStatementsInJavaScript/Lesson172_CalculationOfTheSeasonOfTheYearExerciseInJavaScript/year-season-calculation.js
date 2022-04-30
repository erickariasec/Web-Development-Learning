let month = 4;
let station;

if (month == 1 || month == 2 || month == 12) {
    station = "Winter";
} else if (month == 3 || month == 4 || month == 5) {
    station = "Spring";
} else if (month == 6 || month == 7 || month == 8) {
    station = "Summer";
} else if (month == 9 || month == 10 || month == 11) {
    station = "Autumn";
} else {
    station = "Incorrect Value";
}

console.log(station);