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
person1.firstName = "Juan Carlos"; // ! set firstName ("Juan Carlos")
console.log(person1.firstName); // ! get firstName
