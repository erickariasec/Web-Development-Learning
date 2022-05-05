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
console.log(person.age);
console.log(person.email);
console.log(person.fullName());

console.log(person);


// ! Another way to declare Objects
let person2 = new Object();
person2.firstName = 'Carlos';
person2.address = 'Saturn S18';
person2.phoneNumber = '1234567890';

console.log(person2.phoneNumber);