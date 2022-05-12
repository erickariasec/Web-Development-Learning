class Person { // Implicitly extends Object class

    static counterPersonObjects = 0; // ! Static Attribute

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        Person.counterPersonObjects++;
        console.log("Increments counter: " + Person.counterPersonObjects); 
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
        return this._firstName + " " + this._lastName;
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
console.log(employee1);
console.log(employee1.fullName());
console.log(employee1.toString()); 

//person1.greet(); // It is not possible to call a static method from an object
Person.greet(); // Static methods are called through Class
Person.greet2(person1);

Employee.greet(); // We can use static methods in child Classes
Employee.greet2(employee1);

console.log(person1.counterPersonObjects);
console.log(Person.counterPersonObjects); // ! Access static variable through Class

console.log(Employee.counterPersonObjects); // ! Static Variable inherit to Child Class