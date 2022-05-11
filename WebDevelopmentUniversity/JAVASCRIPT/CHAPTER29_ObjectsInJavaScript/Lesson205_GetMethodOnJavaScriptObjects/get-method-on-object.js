let person = {
    firstName: 'Juan',
    lastName: 'Perez',
    email: 'jperez@mail.com',
    age: 28,
    get fullName() { // ! Get Method
        return this.firstName + ' ' + this.lastName;
    }
}

console.log (person.fullName);  // ! Print Get Method