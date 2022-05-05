let person = {
    firstName: 'Juan',
    lastName: 'Perez',
    email: 'jperez@mail.com',
    age: 28,
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(person.firstName);
console.log(person['firstName']); // ! Another way to access object properties

// ? for in
for (propertyName in person) {
    console.log(propertyName); // * Property names
    console.log(person[propertyName]); // * Property values
}