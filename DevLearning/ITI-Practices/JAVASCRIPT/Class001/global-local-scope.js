// !Scope global and local
var firstName = "Erick";
let myFunction = () => {
    var localOne = "Manuel";
    return console.log(firstName);
};
myFunction();
//console.log(localOne); // It is not possible because this is a local variable from myFunction()

// ? Consultar Block scope (let & const) and Function scope