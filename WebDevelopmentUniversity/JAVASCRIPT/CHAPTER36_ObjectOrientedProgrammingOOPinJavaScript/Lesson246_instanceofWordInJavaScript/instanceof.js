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

function determineType(type) {
    console.log(type.getDetails()); // ! Applying Polymorphism depending on the Object called
    // ! It is recommended to put from lowest to highest hierarchy
    if(type instanceof Boss) {
        console.log("It is an object of Boss type");
        console.log(type._department);
    } else if (type instanceof Employee) {
        console.log("It is an object of Employee type");
        console.log(type._department);
    } else if (type instanceof Object) {
        console.log("It is an object of Object type");
    }
}

let employee1 = new Employee("Juan", 3000);
let boss1 = new Boss("Carlos", 5000, "Systems");

determineType(employee1);
determineType(boss1);