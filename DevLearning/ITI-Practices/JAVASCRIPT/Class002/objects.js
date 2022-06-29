// !Objects

// Mongo DB JSON
// API comes with JSON

const students = {
    firstName: "Erick",
    age: 23,
    career: ["Redes", "Aplicaciones Web"],
    printNameAndAge: function () {
        return `The name is ${this.firstName} and the age is ${this.age}`;
    }
};

students.career.push("Turismo");

console.log(students);

console.log(students.printNameAndAge());

const StudentsITI = function (firstName, age, email) {
    this.firstName = firstName;
    this.age = age;
    this.email = email;
    this.printNameAndAge = function () {
        return `The name is ${this.firstName} and the age is ${this.age}`;
    };
};

let stu = new StudentsITI("Erick", 23, "erick.arias@iti.edu.ec");
console.log(stu.printNameAndAge());