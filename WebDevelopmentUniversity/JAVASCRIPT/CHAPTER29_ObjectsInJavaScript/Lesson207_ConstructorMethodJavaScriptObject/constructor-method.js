// ! Constructor Function for objects of type Person
function Person(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}

// ! Object father
let father = new Person ('Juan', 'Perez', 'jperez@mail.com');
console.log (father);

// ! Object mother
let mother = new Person ('Laura', 'Quintero', 'lquintero@mail.com');
console.log(mother);

father.firstName = 'Carlos'; // ! Changing name of father object

console.log (father);
console.log (mother);