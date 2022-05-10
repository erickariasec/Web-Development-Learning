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
// person.te1 = '44332211'; // It is not te1, it is tel, so it will create another property
person.tel = '44332211'; // * This will modify tel number property

console.log(person);

delete person.tel; // ! Both the property and the associated value (tel) are deleted

console.log(person);