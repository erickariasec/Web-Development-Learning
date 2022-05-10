let person = {
    firstName: 'Juan',
    lastName: 'Perez',
    email: 'jperez@mail.com',
    age: 28,
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}

person.tel = '55443322';
person.tel = '44332211'; // This will modify tel number property

console.log(person);

delete person.tel; // Both the property and the associated value (tel) are deleted

console.log(person);

// ! Concatenate each value with each property
console.log ('Nombre Completo: ' + person.firstName + ' ' + person.lastName);

// ! for in
for (propertyName in person) {
    console.log (person [propertyName]);
}

// ! Array
let personArray = Object.values (person);
console.log(personArray);

// ! String (print property and value)
let personString = JSON.stringify (person);
console.log(personString);