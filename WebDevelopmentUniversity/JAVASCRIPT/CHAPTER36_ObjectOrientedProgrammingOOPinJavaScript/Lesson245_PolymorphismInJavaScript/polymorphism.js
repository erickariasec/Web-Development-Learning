class Employee {
    constructor(employeeName, salary) {
        this._employeeName = employeeName;
        this._salary = salary;
    }
    getDetails() {
        return `Employee: employeeName: ${this._employeeName}, salary: ${this._salary}`;
    }
}

class Boss extends Employee {
    constructor(employeeName, salary, department) {
        super(employeeName, salary);
        this._department = department;
    }
    // Override getDetails()
    getDetails() {
        return `Boss: ${super.getDetails()} + , department: ${this._department}`;
    }
}

function printData(type) {
    console.log(type.getDetails()); // ! Applying Polymorphism depending on the Object called
}

let employee1 = new Employee("Juan", 3000);
let boss1 = new Boss("Carlos", 5000, "Systems");

printData(employee1);
printData(boss1);