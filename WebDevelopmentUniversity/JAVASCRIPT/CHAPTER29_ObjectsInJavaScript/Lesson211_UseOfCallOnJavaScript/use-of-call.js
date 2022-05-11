let person1 = {
    firstName: "Juan",
    lastName: "Perez",
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}

let person2 = {
    firstName: "Carlos",
    lastName: "Lara"
}

console.log(person1.fullName());

// ! Use of call to use the method person1.fullName() with information of person2
console.log(person1.fullName.call(person2));