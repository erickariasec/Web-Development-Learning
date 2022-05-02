// let cars = new Array('BMW', 'Mercedes Benz', 'Volvo'); //! This is the classic way (not recommendable nowadays)
const cars = ["BMW", "Mercedes Benz", "Volvo"]; // ! "Audi" was added to the array with cars.push("Audi");
console.log(cars);

console.log(cars[0]);
console.log(cars[2]);

for (let i = 0; i < cars.length; i++) {
  console.log("Car N°" + (i + 1) + ": " + cars[i]);
}

cars[1] = "MercedesBenz";
console.log(cars[1]);

cars.push("Audi"); // It is used to add an element to the array
console.log(cars);
