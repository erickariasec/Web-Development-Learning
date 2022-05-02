let month = '4';
let season = "Unknown Season";

switch (month) {
    case 1: case 2: case 12:
        season = "Winter";
        break;
    case 3: case 4: case 5:
        season = "Spring";
        break;
    case 6: case 7: case 8:
        season = "Summer";
        break;
    case 9: case 10: case 11:
        season = "Autumn";
        break;
    default:
        season = "Incorrect Value";
        break;
}

console.log(season);
// ! Incorrect value, since month is char, not a number type