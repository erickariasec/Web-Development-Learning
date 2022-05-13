class Employee extends Person {
    
    static counterEmployees = 0;

    constructor(firstName, lastName, age, salary) {
        super(firstName, lastName, age);
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