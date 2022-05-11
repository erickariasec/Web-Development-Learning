let person1 = {
    firstName: "Juan",
    lastName: "Perez",
    fullName: function(title, tel){
        return title + ': ' + this.firstName + ' ' + this.lastName + ', ' + tel;
    }
}

let person2 = {
    firstName: "Carlos",
    lastName: "Lara"
}

console.log(person1.fullName("Lic", "44226688"));

// ! Use of call to use the method person1.fullName() with information of person2 WITH PARAMETERS
console.log(person1.fullName.call(person2, "Ing", "55443322"));