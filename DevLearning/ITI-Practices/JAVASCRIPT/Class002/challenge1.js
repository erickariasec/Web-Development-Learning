/* 1. Reto #1 - Suma hasta cincuenta
Crea una variable que se llame total, después pide
a tu usuario que ingrese un número y lo sume al valor de
total. Haz que esto se repita hasta que el valor de total sea mayor
a 50 y muestra el resultado en pantalla.*/

let total=0;
let userNumber = Number(prompt("Enter a number"));

while (total < 50) {
    total += userNumber;
    debugger
}