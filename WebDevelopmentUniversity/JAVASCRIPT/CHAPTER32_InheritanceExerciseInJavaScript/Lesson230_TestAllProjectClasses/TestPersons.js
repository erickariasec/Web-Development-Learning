class Person {
    
    static counterPersons = 0;

    constructor(firstName, lastName, age) {
        this._idPerson = ++Person.counterPersons;
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
        return `${this._idPerson} ${this._firstName} ${this._lastName} ${this._age}`;
    }
}

class Employee extends Person {
    
    static counterEmployees = 0;

    constructor(firstName, lastName, age, salary) {
        super(firstName, lastName, age)
        this._idEmployee = ++Employee.counterEmployees;
        this._salary = salary;
    }

    get idEmployee() {
        return this._idEmployee;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    toString() {
        return `${super.toString()} ${this._idEmployee} ${this._salary}`;
    }
}

class Client extends Person {

    static counterClients = 0;

    constructor(firstName, lastName, age, registrationDate) {
        super(firstName, lastName, age);
        this._idClient = ++Client.counterClients;
        this._registrationDate = registrationDate;
    }

    get idClient() {
        return this._registrationDate;
    }

    get registrationDate() {
        return this._registrationDate;
    }

    set registrationDate(registrationDate) {
        this._registrationDate = registrationDate;
    }

    toString() {
        return `${super.toString()} ${this._idClient} ${this._registrationDate}`;
    }
}

// ! Test Person Class
let person1 = new Person("Juan", "Perez", 28);
console.log(person1.toString());

let person2 = new Person("Carlos", "Ramirez", 35);
console.log(person2.toString());

// ! Test Employee Class
let employee1 = new Employee("Karla", "Gomez", 25, 5000);
console.log(employee1.toString());

let employee2 = new Employee("Laura", "Quintero", 33, 7000);
console.log(employee2.toString());

// ! Test Client Class
let client1 = new Client("Miguel", "Cervantes", 30, new Date());
console.log(client1.toString());

let client2 = new Client("Maria", "Lara", 38, new Date());
console.log(client2.toString());