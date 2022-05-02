// let cars = new Array('BMW', 'Mercedes Benz', 'Volvo'); //! This is the classic way (not recommendable nowadays)
const cars = ["BMW", "Mercedes Benz", "Volvo"];
console.log(cars);

console.log(cars[0]);
console.log(cars[2]);

for (let i = 0; i < cars.length; i++) {
    console.log("Car N°" + (i+1) + ": " + cars[i]);
}