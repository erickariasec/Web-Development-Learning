/*
    Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
    Nombre completo (nombre y apellido)
    Dinero real (dinero ahorrado menos deudas)
*/

const firstName = "Erick";
const lastName = "Arias";
const ITI_UserName = "erick.arias";
let age = 23;
const email = "erick.arias@iti.edu.ec";
const checkAdult = true;
let moneySaved = 1000;
let debts = 100;

const fullName = `${firstName} ${lastName}`;
console.log(fullName); // Erick Arias

let realMoney = `${moneySaved - debts}`;
console.log(realMoney); // 900