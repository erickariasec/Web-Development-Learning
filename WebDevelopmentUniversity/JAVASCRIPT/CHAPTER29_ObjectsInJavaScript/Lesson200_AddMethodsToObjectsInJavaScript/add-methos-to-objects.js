let person = {
    firstName: 'Juan',
    lastName: 'Perez',
    email: 'jperez@mail.com',
    age: 28,
    fullName: function(){ // ! Adding function to person object
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(person.firstName);
console.log(person.age);
console.log(person.email);
console.log(person.fullName()); // ! Calling person object function (fullname)

console.log(person);