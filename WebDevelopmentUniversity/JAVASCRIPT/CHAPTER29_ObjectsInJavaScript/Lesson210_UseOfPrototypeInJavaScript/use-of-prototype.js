// Constructor Function for objects of type Person
function Person(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.fullName = function() {  // Creating function
        return this.firstName + ' ' + this.lastName;
    }
}

// ! Prototype
Person.prototype.tel = "44332211" // ! Adding this property to all Person objects

// Object father
let father = new Person("Juan", "Perez", "jperez@mail.com");
father.tel = "11223344"; // ! Modify father tel
console.log(father.tel);

// Object mother
let mother = new Person("Laura", "Quintero", "lquintero@mail.com");
console.log(mother.tel);