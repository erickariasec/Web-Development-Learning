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

console.log(cars.length);
cars[cars.length] = "Cadillac"; // cars[4]
console.log(cars);

cars[6] = "Porsche"; // Leave an empty space at position 5 (It is not recommendable)
console.log(cars);

// ! ASK IF IT IS AN ARRAY
console.log(typeof cars);

console.log(Array.isArray(cars));

console.log(cars instanceof Array);