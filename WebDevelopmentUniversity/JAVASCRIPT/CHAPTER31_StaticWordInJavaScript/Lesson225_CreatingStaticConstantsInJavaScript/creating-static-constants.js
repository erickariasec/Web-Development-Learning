class Person { // Implicitly extends Object class

    static counterPersons = 0; // ! Static Attribute (Class)

    static get MAX_OBJECTS() { // ! Static Constant 
        return 5;
    }

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        if (Person.counterPersons < Person.MAX_OBJECTS) {
            this.idPerson = ++Person.counterPersons;
        } else {
            console.log("The maximum number of objects allowed has been exceeded")
        }
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
    fullName() {
        // Method to get full name
        return this.idPerson + ' ' + this._firstName + ' ' + this._lastName;
    }
    // Override Parent Class Method (Object)
    toString() {
        return this.fullName();
        // Polymorphism is applied here (multiple forms at runtime)
        // The method that is executed depends on whether it is a reference of type parent or of type child
    }
    static greet() { // Static Methods are associated with the Class, not with Objects
        console.log("Greeting from static method");
    }
    static greet2(personObject) {
        console.log(personObject.firstName + ' ' + personObject.lastName);
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
    // Override Parent Class Method
    fullName() {
        return super.fullName() + ', ' + this._department; // Calling parent method (with super) and concatenate with new values
    }
}

let person1 = new Person("Juan", "Perez");
console.log(person1.toString());

let employee1 = new Employee("Maria", "Jimenez", "Marketing");
console.log(employee1.toString());

console.log(Person.counterPersons);

let person2 = new Person("Karla", "Ramirez");
console.log(person2.toString());
console.log(Person.counterPersons);

console.log(Person.MAX_OBJECTS);
Person.MAX_OBJECTS = 10; // ! We could not change a static constant attribute
console.log(Person.MAX_OBJECTS);

let person3 = new Person("Mariano", "Lara");
console.log(person3.toString());
let person4 = new Person("Armando", "Toledo");
console.log(person4.toString());
let person5 = new Person("Laura", "Quintero");
console.log(person5.toString());