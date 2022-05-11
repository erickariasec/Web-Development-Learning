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

console.log(person1.fullName("Lic", "44778822"));

// ! Use of apply to use the method person1.fullName() with information of person2
let myArray = ["Ing", "55443322"]
console.log(person1.fullName.apply(person2, myArray));


// ! The call() method takes arguments separately.
// ! The apply() method takes arguments as an array.