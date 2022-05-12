class Person {
    
    static counterPersons = 0;

    constructor(idPerson, firstName, lastName, age) {
        this._idPerson = idPerson;
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get idPerson() {
        return this._idPerson;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    toString() {
        // ! Template String
        return `
            ${this._idPerson}
            ${this._firstName}
            ${this._lastName}
            ${this._age}`;
    }
}