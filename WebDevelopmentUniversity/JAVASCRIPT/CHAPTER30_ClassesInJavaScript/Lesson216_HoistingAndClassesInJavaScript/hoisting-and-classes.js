// ! We cannot create objects of classes that have not yet been defined
// ! The concept of hoisting does not apply
//let person2 = new Person("Karla", "Juarez"); // ! NOT POSSIBLE

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }
}

let person1 = new Person("Juan", "Perez");
person1.firstName = "Juan Carlos"; // set firstName ("Juan Carlos")
console.log(person1.firstName); // get firstName

// ! After class is defined, we can create objects
let person3 = new Person("Karla", "Juarez");
console.log(person3);