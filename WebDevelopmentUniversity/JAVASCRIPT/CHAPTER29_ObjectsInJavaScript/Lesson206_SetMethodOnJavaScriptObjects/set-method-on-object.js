let person = {
    firstName: 'Juan',
    lastName: 'Perez',
    email: 'jperez@mail.com',
    age: 28,
    language: 'en',
    get languageConversor() {
        return this.language.toUpperCase();
    },
    set languageConversor(languageConversor) { // ! Set Method
        this.language = languageConversor.toUpperCase(); // Data received is converted to UpperCase
    },
    get fullName() { // Get Method
        return this.firstName + ' ' + this.lastName;
    }
}

console.log (person.languageConversor);

person.languageConversor = 'es';

console.log (person.languageConversor);
console.log (person.language);