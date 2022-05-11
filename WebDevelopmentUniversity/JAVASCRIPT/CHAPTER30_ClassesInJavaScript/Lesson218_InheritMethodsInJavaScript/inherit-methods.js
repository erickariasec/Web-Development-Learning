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
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    fullName() { // ! Method to get full name
        return this._firstName + ' ' + this._lastName;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, department) {
        super(firstName, lastName); // Call Constructor of the Parent Class (Person)
        this._department = department;
    }
    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }
}

let person1 = new Person("Juan", "Perez");
console.log(person1);

let employee1 = new Employee("Maria", "Jimenez", "Marketing");
console.log(employee1);
console.log(employee1.fullName()); // ! Inherit method